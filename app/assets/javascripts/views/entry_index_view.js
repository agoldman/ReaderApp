FD.Views.EntryIndexView = Backbone.View.extend({

  render: function() {
    var that = this;

    var entriescol = that.model.get('feedEntries');
    entriescol.url = "/feeds/" + that.model.id + "/entries";
    entriescol.fetch({
      success: function () {
        var renderContent = JST['entries/index']({
          entries: entriescol
        });

        that.$el.html(renderContent);
      }
    });

    return that;
  }

});