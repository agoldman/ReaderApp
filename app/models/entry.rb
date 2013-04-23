class Entry < ActiveRecord::Base
  attr_accessible :feed_id, :guid, :title, :link, :description, :comments, :pubDate

  belongs_to :feed

  validates :guid, :uniqueness => true
end
