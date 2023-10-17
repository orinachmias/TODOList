"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const database_connection_1 = require("./database/database.connection");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    (0, database_connection_1.run)();
    await app.listen(3030);
}
bootstrap();
//# sourceMappingURL=main.js.map