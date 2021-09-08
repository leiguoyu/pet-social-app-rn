

class FetchInterceptor {

  public interceptors_req: Array<Function>;
  public interceptors_res: Array<Function>;
  public _fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;

  constructor(_fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) {
    this.interceptors_req = [];
    this.interceptors_res = [];
    this._fetch = fetch;
  }

  public c_fetch(input: RequestInfo, init?: RequestInit | undefined) {
    if (init && (!init.method)) {
      init.method = 'GET';
    }
    //interceptors_req是拦截请求的拦截处理函数集合
    this.interceptors_req.forEach(interceptors => {
      // 拦截器中配置options并返回options
      init = interceptors(init);
    })
    let self: any = this;
    return new Promise(function (resolve, reject) {
      //发起fetch请求，fetch请求的形参是接收上层函数的形参
      self._fetch(input, init).then((res: Response) => {
        //interceptors_res是拦截响应结果的拦截处理函数集合
        self.interceptors_res.forEach((interceptors: any) => {
          //拦截器对响应结果做处理，把处理后的结果返回给响应结果。
          res = interceptors(res);
        })
        //将拦截器处理后的响应结果resolve出去
        resolve(res)
      }).catch((err: any) => {
        reject(err);
      })
    })

  }
  public use_request(cb: Function) {
    this.interceptors_req.push(cb);
  }

  public use_response(cb: Function) {
    this.interceptors_res.push(cb);
  }
}


export const fetchInterceptor = new FetchInterceptor(fetch);
