function convert(input) {
  var parts = input.split(":"),
    minutes = +parts[0],
    seconds = +parts[1];
  return (minutes * 60 + seconds).toFixed(3);
}

convert("1:29.460"); // '89.460'
Share;
Follow;
