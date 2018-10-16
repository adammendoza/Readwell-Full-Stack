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
    @bookshelves = Bookshelf.all
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
    render :index
  end
end
