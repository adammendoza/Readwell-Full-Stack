class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    self.current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless logged_in?
      render json: { base: ['Must be logged in'] }, status: 401
    end
  end

end
