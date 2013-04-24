FD.Models.Feed = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    key: 'feedEntries',
    relatedModel: 'FD.Models.Entry',
    collectionType: 'FD.Collections.FeedEntries',
    // collectionOptions: function(feed) {
    //
    // },
    reverseRelation: {
      key: 'belongsTo',
      keySource: 'feed_id',
      includeInJSON: 'id'
    }
  }]

});

