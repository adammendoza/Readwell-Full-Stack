class Api::BookshelvesController < ApplicationController
  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @shelvings = Shelving.all
    if @bookshelf.save
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def index
    @bookshelves = Bookshelf.all
    @shelvings = Shelving.all
  end

  def show
    @bookshelf = Bookshelf.find_by(id: params[:id])
    @shelvings = Shelving.all
  end

  def update
    @bookshelf = Bookshelf.find_by(id: params[:id])
    @shelvings = Shelving.all
    if @bookshelf && @bookshelf.update_attributes(bookshelf_params)
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf = Bookshelf.find_by(id: params[:id])
    @bookshelf.destroy
    @bookshelves = Bookshelf.all
    @shelvings = Shelving.all
    render :index
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:name, :creator_id)
  end
end
