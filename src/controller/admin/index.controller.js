import base from "./base.controller";

export default class extends base {

    constructor() { //构造函数
        super();
    }

    index() {
        super.isLogin();
        super.json('hello koahubjs');
    }
}