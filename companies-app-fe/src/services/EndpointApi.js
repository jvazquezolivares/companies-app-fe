let API = ""

if (process.env.NODE_ENV === "production") {
    //production
    API = "some_production_url";
} else {
//development
API = "http://localhost:3001";
}

//companies endpoint
export const COMPANIES = API + "/api/v1/companies"

//another endpoints