import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class SoapService implements OnInit
{
  // subject: Subject<any> = new Subject();
  private urlEndPoint : string = 'http://localhost:8080/api/comunas';
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getSoapData(reg_id: string)
  {
    return this.http.post(`${this.urlEndPoint}/${reg_id}`, {responseType: 'text'})
      .pipe(
        map((xmlString: string)=>{
          const asJson = this.xmlStringToJson(xmlString);

          console.log('valos asJason' + asJson);
        //  toStream(asJson);

          return asJson;
        }),
        catchError((err)=> {
          console.warn('INT ERR:', err);
          return err;
        })
      );
  }
  // TOCO: In practice, may want to use an HttpInterceptor:
  //       https://angular.io/guide/http#intercepting-requests-and-responses
  //       https://blog.angularindepth.com/the-new-angular-httpclient-api-9e5c85fe3361

  xmlStringToJson(xml: string)
  {
    // Convert the XML string to an XML Document.
    const oParser = new DOMParser();

    // use the DOMParser browser API to convert text to a Document
    //const oDOM = oParser.parseFromString(xml, "application/xml");
    const oDOM = oParser.parseFromString(xml, "text/html");
    // Convert the XML Document to a JSON Object.
    return this.xmlToJson(oDOM);
  }

  /*textToStream(){
   const toStream = <T>(expression: () => T): Observable<T> =>
  Observable.create((observer: Observer<T>) => {
    const computedValue = computed(expression)
    return computedValue.observe(change => observer.next(change.newValue))
  })
}*/




  /**
   * REF: https://davidwalsh.name/convert-xml-json
   */
  xmlToJson(xml)
  {
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) { // text
      obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
      for(var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof(obj[nodeName]) == "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof(obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }



  getJsonData()
  {
    return this.http.get('assets/testdata.json');
    /*
    Proper practice:
    this.http.get('./testdata.json')
    .subscribe((data) => {
      this.subject.next(data);
    },
    (err) => {
      console.warn('Erroneous! Error:', err);
    });
    */
  }



}
