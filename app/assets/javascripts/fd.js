FD = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function($sideBar, $content, feedsData) {
    var that = this;
    var feeds = new FD.Collections.Feeds(feedsData);

    that.installSidebar($sideBar, feeds);
    new FD.Routers.FeedsRouter($content, feeds);
    Backbone.history.start();
  },

  installSidebar: function($sideBar, feeds) {
    var that = this;
    var feedsIndexView = new FD.Views.FeedsIndexView({
      collection: feeds
    });
    $sideBar.html(feedsIndexView.render().$el);
  }
};
