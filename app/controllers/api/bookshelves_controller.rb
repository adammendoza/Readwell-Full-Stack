class Api::BookshelvesController < ApplicationController
  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    if @bookshelf.save
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def index
    @bookshelves = current_user.owned_bookshelves
  end

  def show
    @bookshelf = Bookshelf.find_by(id: params[:id])
  end

  def update
    @bookshelf = Bookshelf.find_by(id: params[:id])
    if @bookshelf && @bookshelf.update_attributes(bookshelf_params)
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf = Bookshelf.find_by(id: params[:id])
    @bookshelf.destroy
    @bookshelves = current_user.owned_bookshelves
    render :index
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:name, :creator_id)
  end
end
