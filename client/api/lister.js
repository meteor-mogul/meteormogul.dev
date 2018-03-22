// Given an item, return previous or next item in list
// .before(item) and .after(item) return
//   false if item not in list
//   null if first or last item, respectively
//   otherwise, item before or after item in list
function mmLister(list) {
  this.list = list;
  this.before =
  function (item) {
    var position = this.list.indexOf(item);
    if (position < 0) {
      return false;
    }
    if (position == 0) {
      return null;
    }
    return this.list[position - 1];
  };
  this.after =
  function (item) {
    var position = this.list.indexOf(item);
    if (position < 0) {
      return false;
    }
    if (position == this.list.length - 1) {
      return null;
    }
    return this.list[position + 1];
  };
};

export { mmLister };
