class Api::BooksController < ApplicationController
  def show
    @book = Book.find_by(id: params[:id])
  end

  def index
    @books = Book.all
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :isbn, :genre, :year, :cover_img)
  end
end
