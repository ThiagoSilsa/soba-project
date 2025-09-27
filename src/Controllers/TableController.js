import BaseController from "./BaseController.js";


class TableController {
  async getMesas() {
    const { data } = await BaseController.get("/tables");
    return data;
  }
}

export default new TableController();
