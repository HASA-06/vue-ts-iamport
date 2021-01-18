import { RequestPayParamDto } from "./model";

class IMP {
  private IAMPORT_URL = 'https://cdn.iamport.kr/js/iamport.payment-1.1.5.js';
  private requestPayParam: RequestPayParamDto = {
    pg: 'html5_inicis',
    pay_method: 'card',
    mer
  }

  constructor() {
    this.install();
  }

  async install() {
    let script = document.createElement('script') as any;
    
    script.src = this.IAMPORT_URL;
    script.onreadystatechange = script.onload = function() {
      if(!script.readyState) {
        setTimeout(function() {
          return;
        }, 500)
      }
    }

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  async init(merchandiseId: string) {
    (window as any).IMP.init(merchandiseId);

    return;
  }

  async setRequestPayParam() {

  }

  async requestPay() {
    return 'Success';
  }
}

export default IMP;