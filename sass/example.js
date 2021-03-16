const sass = require("sass");

const run = async() => {
  let results = sass.render({
    data: `@import "entry";`,
    importer: function(u, p, d) {
      console.log("url", u, p);
      d({
        file: u
      });
    }
  },
  (err, result) => {
    console.log("css", result.css.toString());
  }
  );
}

run();
