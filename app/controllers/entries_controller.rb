class EntriesController < ApplicationController

  respond_to :json

  def index
    @entries = Entry.where(feed_id: params[:feed_id])
    render :json => @entries
  end

end
