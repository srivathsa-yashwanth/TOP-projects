console.log("Populating some initial data onto mongoDb");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const userArgs = process.argv.slice(2);

const Cpu = require("./models/cpu");
const Gpu = require("./models/gpu");
const Manufacturer = require("./models/manufacturer");
const Category = require("./models/category");

const cpus = [];
const gpus = [];
const manufacturers = [];
const categories = [];

const mongoDbString = userArgs[0];

const main = async () => {
  console.log("DEBUG: Initiating connection to mongoDb");
  await mongoose.connect(mongoDbString);
  console.log("DEBUG: Should be connected now ");
  await createCategories();
  await createManufacturers();
  await createCpus();
  await createGpus();
  console.log("DEBUG: Finished creating data ");
  mongoose.connection.close();
};

const buildCategory = async (name) => {
  const category = new Category({ name:name });
  await category.save();
  categories.push(category);
  console.log("Added Category:", name);
};

const buildManufacturer = async ({
  name,
  leader,
  foundedIn,
  marketCap,
  productCategories,
}) => {
  const manufacturer = new Manufacturer({
    name: name,
    leader: leader,
    foundedIn: foundedIn,
    marketCap: marketCap,
    productCategories: productCategories,
  });
  await manufacturer.save();
  console.log("Added Manufacturer:", name);
  manufacturers.push(manufacturer);
};

const buildCpu = async ({
  name,
  category,
  releaseDate,
  price,
  generation,
  manufacturer,
  specs,
  features,
}) => {
  const cpu = new Cpu({
    name,
    category,
    releaseDate,
    price,
    generation,
    manufacturer,
    specs,
    features,
  });
  await cpu.save();
  console.log("Added Cpu:", name);
  cpus.push(cpu);
};

const buildGpu = async ({
  name,
  category,
  releaseDate,
  price,
  generation,
  manufacturer,
  specs,
  features,
}) => {
  const gpu = new Gpu({
    name,
    category,
    releaseDate,
    price,
    generation,
    manufacturer,
    specs,
    features,
  });
  await gpu.save();
  console.log("Added Gpu:", name);
  gpus.push(gpu);
};

const createCategories = async () => {
  console.log("Adding categories to mongo");
  await Promise.all([buildCategory("cpu"), buildCategory("gpu")]);
};

const createManufacturers = async () => {
  console.log("Adding manufacturers to mongo");
  await Promise.all([
    buildManufacturer({
      name: "Intel",
      leader: "Patrick Gelsinger",
      foundedIn: new Date(1968, 6, 18),
      marketCap: "135.16 billion $",
      productCategories: [categories[0]],
    }),
    buildManufacturer({
      name: "Nvidia",
      leader: "Jenser Huang",
      foundedIn: new Date(1993, 3, 1),
      marketCap: "686.09 billion $",
      productCategories: [categories[1]],
    }),
  ]);
};

const createCpus = async () => {
  console.log("Adding cpus to mongo");
  await Promise.all([
    buildCpu({
      name: "Core i9-13900K",
      category: categories[0],
      releaseDate: new Date(2022, 10, 15),
      price: 560,
      generation: "13th - Raptor Lake",
      manufacturer: manufacturers[0],
      specs: {
        clockSpeed: "5.8 GHz",
        cores: 24,
        socketType: "LGA1700",
      },
      features: ["Hyper threading", "Ecc support"],
    }),
  ]);
};

const createGpus = async () => {
  console.log("Adding gpus to mongo");
  await Promise.all([
    buildGpu({
      name: "GeForce RTX 4090",
      category: categories[1],
      releaseDate: new Date(2022, 9, 1),
      price: 2000,
      generation: "40 series - Ada Lovelace",
      manufacturer: manufacturers[1],
      specs: {
        memory: "24GB",
        clockSpeed: "2.6 GHz",
        tensorCores: "512",
        rayTracing: true,
      },
      features: ["Ray tracing", "Gsync", "DLSS"],
    }),
  ]);
};

main().catch((err) => console.log("Error creating data in mongoDb", err));