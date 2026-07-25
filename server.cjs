var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");

// src/server/database/index.ts
var import_better_sqlite3 = require("drizzle-orm/better-sqlite3");
var import_better_sqlite32 = __toESM(require("better-sqlite3"), 1);

// src/server/database/schema.ts
var schema_exports = {};
__export(schema_exports, {
  categories: () => categories,
  locations: () => locations,
  modifierOptions: () => modifierOptions,
  orderItemModifiers: () => orderItemModifiers,
  orderItems: () => orderItems,
  orders: () => orders,
  productModifiers: () => productModifiers,
  products: () => products,
  promotions: () => promotions,
  userAddresses: () => userAddresses,
  users: () => users
});
var import_sqlite_core = require("drizzle-orm/sqlite-core");
var categories = (0, import_sqlite_core.sqliteTable)("categories", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  slug: (0, import_sqlite_core.text)("slug").notNull().unique(),
  name: (0, import_sqlite_core.text)("name").notNull()
});
var products = (0, import_sqlite_core.sqliteTable)("products", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  slug: (0, import_sqlite_core.text)("slug").notNull().unique(),
  name: (0, import_sqlite_core.text)("name").notNull(),
  categoryId: (0, import_sqlite_core.text)("category_id").references(() => categories.id),
  description: (0, import_sqlite_core.text)("description").notNull(),
  ingredients: (0, import_sqlite_core.text)("ingredients", { mode: "json" }).$type(),
  basePrice: (0, import_sqlite_core.integer)("base_price").notNull(),
  image: (0, import_sqlite_core.text)("image").notNull(),
  rating: (0, import_sqlite_core.real)("rating").notNull(),
  reviewCount: (0, import_sqlite_core.integer)("review_count").notNull(),
  calories: (0, import_sqlite_core.integer)("calories").notNull(),
  isVegetarian: (0, import_sqlite_core.integer)("is_vegetarian", { mode: "boolean" }).notNull(),
  spicyLevel: (0, import_sqlite_core.integer)("spicy_level").notNull(),
  isAvailable: (0, import_sqlite_core.integer)("is_available", { mode: "boolean" }).notNull(),
  isFeatured: (0, import_sqlite_core.integer)("is_featured", { mode: "boolean" }).notNull(),
  badge: (0, import_sqlite_core.text)("badge"),
  allergies: (0, import_sqlite_core.text)("allergies", { mode: "json" }).$type()
});
var productModifiers = (0, import_sqlite_core.sqliteTable)("product_modifiers", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  productId: (0, import_sqlite_core.text)("product_id").references(() => products.id),
  name: (0, import_sqlite_core.text)("name").notNull(),
  isRequired: (0, import_sqlite_core.integer)("is_required", { mode: "boolean" }).notNull(),
  minSelections: (0, import_sqlite_core.integer)("min_selections").notNull(),
  maxSelections: (0, import_sqlite_core.integer)("max_selections").notNull()
});
var modifierOptions = (0, import_sqlite_core.sqliteTable)("modifier_options", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  modifierId: (0, import_sqlite_core.text)("modifier_id").references(() => productModifiers.id),
  name: (0, import_sqlite_core.text)("name").notNull(),
  priceAdjustment: (0, import_sqlite_core.integer)("price_adjustment").notNull(),
  isDefault: (0, import_sqlite_core.integer)("is_default", { mode: "boolean" }).notNull()
});
var promotions = (0, import_sqlite_core.sqliteTable)("promotions", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  code: (0, import_sqlite_core.text)("code").notNull().unique(),
  title: (0, import_sqlite_core.text)("title").notNull(),
  description: (0, import_sqlite_core.text)("description").notNull(),
  discountType: (0, import_sqlite_core.text)("discount_type").notNull(),
  discountAmount: (0, import_sqlite_core.integer)("discount_amount").notNull(),
  maxDiscount: (0, import_sqlite_core.integer)("max_discount"),
  minSubtotal: (0, import_sqlite_core.integer)("min_subtotal"),
  isActive: (0, import_sqlite_core.integer)("is_active", { mode: "boolean" }).notNull()
});
var locations = (0, import_sqlite_core.sqliteTable)("locations", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  name: (0, import_sqlite_core.text)("name").notNull(),
  address: (0, import_sqlite_core.text)("address").notNull(),
  phone: (0, import_sqlite_core.text)("phone").notNull(),
  isOpen: (0, import_sqlite_core.integer)("is_open", { mode: "boolean" }).notNull(),
  hours: (0, import_sqlite_core.text)("hours").notNull()
});
var users = (0, import_sqlite_core.sqliteTable)("users", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  email: (0, import_sqlite_core.text)("email").notNull().unique(),
  passwordHash: (0, import_sqlite_core.text)("password_hash").notNull(),
  firstName: (0, import_sqlite_core.text)("first_name").notNull(),
  lastName: (0, import_sqlite_core.text)("last_name").notNull(),
  phone: (0, import_sqlite_core.text)("phone"),
  isAdmin: (0, import_sqlite_core.integer)("is_admin", { mode: "boolean" }).notNull().default(false)
});
var userAddresses = (0, import_sqlite_core.sqliteTable)("user_addresses", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  userId: (0, import_sqlite_core.text)("user_id").references(() => users.id),
  address: (0, import_sqlite_core.text)("address").notNull(),
  apartment: (0, import_sqlite_core.text)("apartment"),
  city: (0, import_sqlite_core.text)("city").notNull(),
  postalCode: (0, import_sqlite_core.text)("postal_code").notNull(),
  instructions: (0, import_sqlite_core.text)("instructions"),
  isDefault: (0, import_sqlite_core.integer)("is_default", { mode: "boolean" }).notNull().default(false)
});
var orders = (0, import_sqlite_core.sqliteTable)("orders", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  userId: (0, import_sqlite_core.text)("user_id").references(() => users.id),
  // null for guest
  guestEmail: (0, import_sqlite_core.text)("guest_email"),
  guestFirstName: (0, import_sqlite_core.text)("guest_first_name"),
  guestLastName: (0, import_sqlite_core.text)("guest_last_name"),
  guestPhone: (0, import_sqlite_core.text)("guest_phone"),
  status: (0, import_sqlite_core.text)("status").notNull(),
  // 'received', 'preparing', 'out', 'completed', 'cancelled'
  method: (0, import_sqlite_core.text)("method").notNull(),
  // 'delivery', 'pickup'
  subtotal: (0, import_sqlite_core.integer)("subtotal").notNull(),
  discount: (0, import_sqlite_core.integer)("discount").notNull(),
  deliveryFee: (0, import_sqlite_core.integer)("delivery_fee").notNull(),
  tax: (0, import_sqlite_core.integer)("tax").notNull(),
  total: (0, import_sqlite_core.integer)("total").notNull(),
  promotionCode: (0, import_sqlite_core.text)("promotion_code"),
  createdAt: (0, import_sqlite_core.integer)("created_at", { mode: "timestamp" }).notNull()
});
var orderItems = (0, import_sqlite_core.sqliteTable)("order_items", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  orderId: (0, import_sqlite_core.text)("order_id").references(() => orders.id),
  productId: (0, import_sqlite_core.text)("product_id").notNull(),
  name: (0, import_sqlite_core.text)("name").notNull(),
  basePrice: (0, import_sqlite_core.integer)("base_price").notNull(),
  quantity: (0, import_sqlite_core.integer)("quantity").notNull(),
  specialInstructions: (0, import_sqlite_core.text)("special_instructions")
});
var orderItemModifiers = (0, import_sqlite_core.sqliteTable)("order_item_modifiers", {
  id: (0, import_sqlite_core.text)("id").primaryKey(),
  orderItemId: (0, import_sqlite_core.text)("order_item_id").references(() => orderItems.id),
  optionName: (0, import_sqlite_core.text)("option_name").notNull(),
  priceAdjustment: (0, import_sqlite_core.integer)("price_adjustment").notNull()
});

// src/server/database/index.ts
var import_path = __toESM(require("path"), 1);
var dbPath = process.env.NODE_ENV === "production" ? import_path.default.join(process.cwd(), "data", "sqlite.db") : import_path.default.join(process.cwd(), "sqlite.db");
var sqlite = new import_better_sqlite32.default(dbPath);
var db = (0, import_better_sqlite3.drizzle)(sqlite, { schema: schema_exports });

// server.ts
var import_drizzle_orm = require("drizzle-orm");
var import_cookie_parser = __toESM(require("cookie-parser"), 1);
var import_bcryptjs = __toESM(require("bcryptjs"), 1);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
var JWT_SECRET = process.env.JWT_SECRET || "flame_and_crust_secret_key_dev";
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.use((0, import_cookie_parser.default)());
  app.get("/api/tenant-config", (req, res) => {
    try {
      const hostname = req.hostname;
      let tenant = hostname.split(".")[0];
      if (tenant === "localhost" || tenant === "127") {
        tenant = "default";
      }
      const tenantPath = import_path2.default.join(process.cwd(), "tenants", `${tenant}.json`);
      console.log("TENANT REQ:", req.hostname, tenant, tenantPath, import_fs.default.existsSync(tenantPath));
      if (import_fs.default.existsSync(tenantPath)) {
        res.sendFile(tenantPath);
      } else {
        res.sendFile(import_path2.default.join(process.cwd(), "src/content.json"));
      }
    } catch (e) {
      res.status(500).json({ error: "Tenant not found" });
    }
  });
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });
  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const u = await db.select().from(users).where((0, import_drizzle_orm.eq)(users.email, email)).limit(1);
      if (u.length === 0) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const user = u[0];
      const valid = await import_bcryptjs.default.compare(password, user.passwordHash);
      if (!valid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const token = import_jsonwebtoken.default.sign({ id: user.id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: "7d" });
      res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 7 * 24 * 60 * 60 * 1e3 });
      res.json({ user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, isAdmin: user.isAdmin } });
    } catch (e) {
      res.status(500).json({ error: "Server error" });
    }
  });
  app.post("/api/auth/register", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
      const existing = await db.select().from(users).where((0, import_drizzle_orm.eq)(users.email, email)).limit(1);
      if (existing.length > 0) {
        return res.status(400).json({ error: "Email already in use" });
      }
      const passwordHash = await import_bcryptjs.default.hash(password, 10);
      const id = `usr_${Math.floor(Math.random() * 1e6)}`;
      await db.insert(users).values({ id, email, passwordHash, firstName, lastName, isAdmin: false });
      const token = import_jsonwebtoken.default.sign({ id, isAdmin: false }, JWT_SECRET, { expiresIn: "7d" });
      res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 7 * 24 * 60 * 60 * 1e3 });
      res.json({ user: { id, email, firstName, lastName, isAdmin: false } });
    } catch (e) {
      res.status(500).json({ error: "Server error" });
    }
  });
  app.post("/api/auth/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ success: true });
  });
  app.get("/api/products", async (req, res) => {
    const allProducts = await db.select().from(products);
    const allModifiers = await db.select().from(productModifiers);
    const allOptions = await db.select().from(modifierOptions);
    const result = allProducts.map((p) => {
      const pMods = allModifiers.filter((m) => m.productId === p.id).map((m) => ({
        ...m,
        options: allOptions.filter((o) => o.modifierId === m.id)
      }));
      return { ...p, modifiers: pMods };
    });
    res.json(result);
  });
  app.get("/api/products/:slug", async (req, res) => {
    const p = await db.select().from(products).where((0, import_drizzle_orm.eq)(products.slug, req.params.slug)).limit(1);
    if (p.length > 0) {
      const product = p[0];
      const pMods = await db.select().from(productModifiers).where((0, import_drizzle_orm.eq)(productModifiers.productId, product.id));
      const modsWithOptions = await Promise.all(pMods.map(async (m) => {
        const opts = await db.select().from(modifierOptions).where((0, import_drizzle_orm.eq)(modifierOptions.modifierId, m.id));
        return { ...m, options: opts };
      }));
      res.json({ ...product, modifiers: modsWithOptions });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  });
  app.get("/api/categories", async (req, res) => {
    const cats = await db.select().from(categories);
    res.json(cats);
  });
  app.get("/api/locations", async (req, res) => {
    const locs = await db.select().from(locations);
    res.json(locs);
  });
  app.post("/api/promotions/validate", async (req, res) => {
    const { code } = req.body;
    const p = await db.select().from(promotions).where((0, import_drizzle_orm.eq)(promotions.code, code)).limit(1);
    if (p.length > 0 && p[0].isActive) {
      res.json(p[0]);
    } else {
      res.status(400).json({ error: "Invalid or expired promotion code" });
    }
  });
  app.post("/api/orders", async (req, res) => {
    const { items, customer, fulfillment, total, promotionCode, subtotal, discount, tax, deliveryFee } = req.body;
    const orderId = `ORD-${Math.floor(Math.random() * 1e5)}`;
    try {
      await db.insert(orders).values({
        id: orderId,
        status: "received",
        method: fulfillment.address ? "delivery" : "pickup",
        guestFirstName: customer.firstName,
        guestLastName: customer.lastName,
        guestEmail: customer.email,
        guestPhone: customer.phone,
        subtotal: subtotal || 0,
        discount: discount || 0,
        tax: tax || 0,
        deliveryFee: deliveryFee || 0,
        total: total || 0,
        promotionCode: promotionCode || null,
        createdAt: /* @__PURE__ */ new Date()
      });
      res.json({ success: true, orderId, estimatedTime: "30-45 mins" });
    } catch (e) {
      console.error("Order error", e);
      res.status(500).json({ error: "Failed to create order" });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path2.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path2.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
