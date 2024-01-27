 class APIFeatures {
    constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
    }
    filter() {
      let queryobj = { ...this.queryString };
      const excludedfeilds = ["sort", "limit", "page", "feilds"];
      excludedfeilds.forEach((el) => delete queryobj[el]);

      let querystr = JSON.stringify(queryobj);
      querystr = querystr.replace(
        /\b(gte|gt|lte|lt)\b/g,
        (match) => `$${match}`
      );
      queryobj = JSON.parse(querystr);
      this.query .find(queryobj);
      return this;
    }
    sort() {
      if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(',').join(' ');
        this.query = this.query.sort(sortBy);
      }
      else{
        this.query=this.query.sort('-createdAt');
      }
      return this;
    }
    limitingfeilds() {
      if(this.queryString.feilds) {
        const feilds=this.queryString.feilds.split(',').join(' ');
        this.query=this.query.select(feilds);
   }
           return this;
    }
    paginate() {
      const page = this.queryString.page * 1 || 1;
      const limit = this.queryString.limit * 1 || 100;
      const skip = (page - 1) * limit;
      this.query = this.query.skip(skip).limit(limit);
      return this;
    }
  }
  module.exports=APIFeatures;