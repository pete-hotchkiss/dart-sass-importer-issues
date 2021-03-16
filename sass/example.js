const sass = require("sass");

const synchronous = () => {
  sass.render({
    data: `@import "entry";`,
    importer: function(u, p, d) {
      console.log("url", u, p);
      d();
    }
  },
  (err, result) => {
    console.log("css", result.css.toString());
  }
  );
}

const asynchronous = async() => {
  let results = await sass.renderSync({
    data: `@import "entry";`,
    importer: function(u, p, d) {
      console.log("url", u, p);
      return { file: u }
    }
  })

  console.log(results.css.toString());
}


asynchronous();
synchronous();
