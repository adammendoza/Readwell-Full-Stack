class Api::ShelvingsController < ApplicationController
  def create
    @shelving = Shelving.new(shelving_params)
    if @shelving.save
      if ['Want to Read', 'Read', 'Currently Reading'].include?(@shelving.bookshelf.name)
        current_user.owned_bookshelves.each do |shelf|
          next if @shelving.bookshelf.name == shelf.name || !(['Want to Read', 'Read', 'Currently Reading'].include?(shelf.name))
          shelf.shelvings.each do |prev_shelving|
            if prev_shelving.book_id == @shelving.book_id
              prev_shelving.destroy
            end
          end
        end
      end
      @bookshelves = current_user.owned_bookshelves
      render :index
    else
      render json: @shelving.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelving = Shelving.find_by(book_id: params[:shelving][:book_id], bookshelf_id: params[:shelving][:bookshelf_id]);
    debugger;
    @shelving.destroy
    @bookshelves = current_user.owned_bookshelves
    render :index
  end

  def index
    @bookshelves = current_user.owned_bookshelves
    render :index
  end

  private

  def shelving_params
    params.require(:shelving).permit(:book_id, :bookshelf_id)
  end
end
