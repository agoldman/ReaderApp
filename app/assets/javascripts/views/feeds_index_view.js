FD.Views.FeedsIndexView = Backbone.View.extend({

  initialize: function(){
    var that = this;
    var renderContent = that.render.bind(that);
    that.collection.on('add', renderContent);
    that.collection.on('change', renderContent);
    that.collection.on('remove', renderContent);
  },

  render: function() {
    var that = this;
    var renderContent = JST["feeds/list"]({
      feeds: that.collection
    });
    that.$el.html(renderContent);

    return that;
  }
});