/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import i18N from "@strapi/plugin-i18n/strapi-admin";
import sentry from "@strapi/plugin-sentry/strapi-admin";
import seo from "@strapi/plugin-seo/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.js";

renderAdmin(document.getElementById("strapi"), {
  customisations,

  plugins: {
    i18n: i18N,
    sentry: sentry,
    seo: seo,
    "users-permissions": usersPermissions,
    "import-export-entries": importExportEntries,
  },
});
