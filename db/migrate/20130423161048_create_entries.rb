class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title
      t.string :link
      t.text :description
      t.text :comments
      t.datetime :pubDate
      t.string :guid
      t.integer :feed_id

      t.timestamps
    end
  end
end
