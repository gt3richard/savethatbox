const { valid } = require("semver");

_ = require("lodash");
fs = require("fs");
parse = require("csv-parse");

var data = [];

fs.createReadStream("./tools/input.csv")
  .pipe(parse({ delimiter: "\t", columns: true }))
  .on("data", function (row) {
    // Build
    Object.keys(row).forEach((r) => {
      switch (r) {
        case "90 day return":
          row["gn"] = row[r] === "x" ? true : false;
          break;
        case "no restocking fee":
          row["nrf"] = row[r] === "x" ? true : false;
          break;
        case "free return shipping":
          row["frs"] = row[r] === "x" ? true : false;
          break;
        case "shipping label":
          row["sl"] = row[r] === "x" ? true : false;
          break;
        case "category":
          row["cat"] = row[r].toLowerCase();
          break;
        case "background color":
          row["bg"] = row[r];
          break;
        case "last update":
          row["lu"] = row[r];
          break;
        case "id":
          row["logo"] = row[r].toString() + ".png";
          row[r] = parseInt(row[r]);
          break;
      }
    });

    // Validate Required Fields
    var validation = [];
    [
      "id",
      "name",
      "link",
      "logo",
      "gn",
      "90 day return",
      "nrf",
      "no restocking fee",
      "sl",
      "shipping label",
      "frs",
      "free return shipping",
      "last update",
      "category",
    ].forEach((v) => {
      switch (row[v]) {
        case "":
        case NaN:
          validation.push("Missing " + v);
          break;
      }
    });

    // Validate Background Color
    if (
      row["bg"] !== "" &&
      !(row["bg"].startsWith("#") || row["bg"].length !== 7)
    ) {
      validation.push("Invalid Background Color " + row["bg"]);
    }

    // Validate Image Exists
    if (!fs.existsSync("./static/business/" + row["logo"])) {
      validation.push("Missing Logo PNG  ./static/business/" + row["logo"]);
    }

    // Save
    if (validation.length === 0) {
      const { id, name, link, logo, gn, nrf, sl, frs, lu, bg, cat } = row;
      data.push({ id, name, link, logo, gn, nrf, sl, frs, lu, bg, cat });
    } else {
      console.log({
        data: row,
        validation: validation,
      });
    }
  })
  .on("end", function () {
    // Validate Duplicate Businesses
    var validation = [];
    var names = data.map((m) => m.name);
    var duplicates = names.filter((name, idx) => names.indexOf(name) != idx);
    duplicates.forEach((d) => {
      validation.push("Duplicate Name found " + d);
    });

    // Validate Duplicate Ids
    var ids = data.map((m) => m.id);
    duplicates = ids.filter((id, idx) => ids.indexOf(id) != idx);
    duplicates.forEach((d) => {
      validation.push("Duplicate Ids found " + d);
    });

    if (validation.length === 0) {
      fs.writeFileSync("./src/assets/data.json", JSON.stringify(data), {
        encoding: "utf-8",
        flag: "w",
      });
      console.log("done - wrote " + data.length + " records");
    } else {
      console.log(validation);
    }
  });
