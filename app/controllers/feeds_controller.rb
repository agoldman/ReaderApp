class FeedsController < ApplicationController

  respond_to :json
  respond_to :html, only: [:index]

  def index
    @feeds = Feed.all
    respond_to do |format|
      format.json { render json: @feeds}
      format.html { render :index }
    end
  end

end
