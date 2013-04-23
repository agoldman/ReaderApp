class Feed < ActiveRecord::Base
  attr_accessible :title, :url
  has_many :entries

  def self.fetch(url)
    fd = Feed.find_by_url(url)

    if fd.nil?
      raise "No feed."
    elsif fd.entries.nil?
      feed = SimpleRSS.parse(open(url))
      feed.entries.each do |entry|
        entry[:feed_id] = fd.id
        Entry.create!(entry)
      end
    else
      feed = SimpleRSS.parse(open(url))
      recent_pub = Entry.where(:feed_id => fd.id).order(:pubDate).last
      feed.entries.each do |entry|
        if entry.pub_date > recent_pub
          Entry.create!(entry)
        end
      end
    end
  end

end
