const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootts0qp/",
            name: "springbootts0qp",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootts0qp/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "数字迎新系统"
        } 
    }
}
export default base
