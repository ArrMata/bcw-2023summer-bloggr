export class Blog {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.creator = data.creator
        this.imgUrl = data.imgUrl || "https://images.unsplash.com/photo-1537790698196-aad88bf9bb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
}
