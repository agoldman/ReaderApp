FD.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function($rootEl, feeds) {
    this.$el = $rootEl;
    this.feeds = feeds;
  },

  routes: {
    '': 'index',
    'feeds/:id/entries': 'show',
    'feeds/:id/entries/new': 'new'
  },

  index: function() {
    var that = this;


    that.$el.empty();
  },

  show: function(id) {
    var that = this;

    var feed = that.feeds.get(id);

    var entryIndexView = new FD.Views.EntryIndexView({
      model: feed
    });

    //console.log(entryIndexView.render());
    that.$el.html(entryIndexView.render().$el);
  },

  new: function() {

  }

});