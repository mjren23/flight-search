(this.webpackJsonpflight=this.webpackJsonpflight||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},126:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},222:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(22),c=a.n(r),i=(a(105),a(59),a(13)),o=a(14),l=a(9),d=a(16),h=a(15),u=a(56),j=a.n(u),b=(a(106),a(107),a(26)),g=a.n(b),p=(a(126),a(96)),v=a.n(p),O=a.p+"static/media/flight_land-24px.66ae18ca.svg",m=a.p+"static/media/flight_takeoff-24px.dffe0651.svg",f=a.p+"static/media/arrow_forward-24px.d90aae58.svg",x=a.p+"static/media/arrow_back-24px.037e7aeb.svg",y=a(1),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={price:e.price,carrier:e.carrier,direct:e.direct,currency:e.currency,destination:e.destination,origin:e.origin,date:e.date,cheapest:e.cheapest,roundtrip:e.roundtrip,inboundleg:e.inboundleg,returnDate:e.inbounddate},n.getDirectComponent=n.getDirectComponent.bind(Object(l.a)(n)),n.getAirports=n.getAirports.bind(Object(l.a)(n)),n.getDates=n.getDates.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"getDirectComponent",value:function(){return this.state.direct?Object(y.jsx)("div",{className:"direct",children:"Direct flight"}):Object(y.jsx)("div",{className:"direct",children:"Indirect flight"})}},{key:"getAirports",value:function(){return this.state.roundtrip?Object(y.jsxs)("div",{className:"double",children:[Object(y.jsxs)("div",{className:"locations",children:[Object(y.jsxs)("div",{className:"airports",children:[Object(y.jsx)("div",{className:"location",children:this.state.origin}),Object(y.jsx)("img",{id:"arrow",src:f,alt:"arrow right"}),Object(y.jsx)("div",{className:"location",children:this.state.destination})]}),Object(y.jsxs)("div",{className:"icons",children:[Object(y.jsx)("img",{className:"icon",src:m,alt:"plane icon takeoff"}),Object(y.jsx)("img",{src:O,alt:"plane icon landing"})]})]}),Object(y.jsxs)("div",{className:"locations",children:[Object(y.jsxs)("div",{className:"airports",children:[Object(y.jsx)("div",{className:"location",children:this.state.destination}),Object(y.jsx)("img",{id:"arrow",src:x,alt:"arrow right"}),Object(y.jsx)("div",{className:"location",children:this.state.origin})]}),Object(y.jsxs)("div",{className:"icons",children:[Object(y.jsx)("img",{className:"icon",src:O,alt:"plane icon takeoff"}),Object(y.jsx)("img",{src:m,alt:"plane icon landing"})]})]})]}):Object(y.jsxs)("div",{className:"locations",children:[Object(y.jsxs)("div",{className:"airports",children:[Object(y.jsx)("div",{className:"location",children:this.state.origin}),Object(y.jsx)("img",{id:"arrow",src:f,alt:"arrow right"}),Object(y.jsx)("div",{className:"location",children:this.state.destination})]}),Object(y.jsxs)("div",{className:"icons",children:[Object(y.jsx)("img",{className:"icon",src:m,alt:"plane icon takeoff"}),Object(y.jsx)("img",{src:O,alt:"plane icon landing"})]})]})}},{key:"getDates",value:function(){return this.state.roundtrip?Object(y.jsxs)("div",{className:"double",children:[Object(y.jsxs)("div",{className:"dateChunk",id:"roundtripDate",children:[Object(y.jsx)("div",{className:"date",children:this.state.date.toLocaleDateString(void 0,{month:"long"})+" "+this.state.date.toLocaleDateString(void 0,{day:"numeric"})}),Object(y.jsx)(this.getDirectComponent,{})]}),Object(y.jsxs)("div",{className:"dateChunk",id:"roundtripDate",children:[Object(y.jsx)("div",{className:"date",children:this.state.returnDate.toLocaleDateString(void 0,{month:"long"})+" "+this.state.returnDate.toLocaleDateString(void 0,{day:"numeric"})}),Object(y.jsx)(this.getDirectComponent,{})]})]}):Object(y.jsxs)("div",{className:"dateChunk",children:[Object(y.jsx)("div",{className:"date",children:this.state.date.toLocaleDateString(void 0,{month:"long"})+" "+this.state.date.toLocaleDateString(void 0,{day:"numeric"})}),Object(y.jsx)(this.getDirectComponent,{})]})}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"result",id:this.state.cheapest?"cheapest":"",children:[Object(y.jsx)("div",{className:"price-container",children:Object(y.jsx)("div",{className:"price",children:v()(this.state.currency)+this.state.price})}),Object(y.jsx)(this.getAirports,{}),Object(y.jsx)(this.getDates,{}),Object(y.jsx)("div",{className:"carrier",children:this.state.carrier})]})}}]),a}(s.a.Component),C=a(97),k=(a(137),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={id:e.id},n.getLocations=n.getLocations.bind(Object(l.a)(n)),n.parseLocations=n.parseLocations.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"getLocations",value:function(e,t){if(e.length>=2){console.log("inside getLocations");var a={method:"GET",url:"".concat("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0","/").concat("US","/").concat("USD","/").concat("en-US","/"),params:{query:e},headers:{"x-rapidapi-key":"206f8b7770msh3b6406f406cd87bp19f0a9jsna2fbc9477909","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}};g.a.request(a).then(function(e){t(this.parseLocations(e))}.bind(this)).catch((function(e){console.error(e)}))}}},{key:"parseLocations",value:function(e){for(var t=[],a=Array.from(e.data.Places),n=0;n<a.length;n++)t.push({label:a[n].PlaceName+", "+a[n].CountryName,value:a[n].PlaceId});return t}},{key:"render",value:function(){var e=this;return Object(y.jsx)(C.a,{components:{DropdownIndicator:function(){return null},IndicatorSeparator:function(){return null}},className:"search",placeholder:this.props.placeholder,loadOptions:function(t,a){return e.getLocations(t,a)},onChange:function(t){return e.props.handleLocationChange(t,e.state.id)}})}}]),a}(s.a.Component)),N=(a(138),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"error",children:"No results found. Try nearby airports or a different date."})}}]),a}(s.a.Component)),S=a(98),w=a.n(S),L=a.p+"static/media/airplane.bf6b8490.png",A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleLocationChange=function(e,t){console.log(n.state.returnDate),"destination"==t?(n.setState({destination:e.value}),n.state.origin.length>0&&n.setState({buttonShow:!0})):(n.setState({origin:e.value}),n.state.destination.length>0&&n.setState({buttonShow:!0}))},n.state={destination:"",origin:"",departureDate:new Date(e.today.getFullYear(),e.today.getMonth(),e.today.getDate()+1),returnDate:null,buttonShow:!1,results:null,loading:!1,showImage:!0,currency:e.currency,roundtrip:!1,message:"Dates must be at least one day in the future"},console.log("constructor"),n.handleLocationChange=n.handleLocationChange.bind(Object(l.a)(n)),n.handleDepartureDateSelect=n.handleDepartureDateSelect.bind(Object(l.a)(n)),n.handleDepartureDateChange=n.handleDepartureDateChange.bind(Object(l.a)(n)),n.handleReturnDateChange=n.handleReturnDateChange.bind(Object(l.a)(n)),n.handleReturnDateSelect=n.handleReturnDateSelect.bind(Object(l.a)(n)),n.onSearch=n.onSearch.bind(Object(l.a)(n)),n.showAlert=n.showAlert.bind(Object(l.a)(n)),n.readResponse=n.readResponse.bind(Object(l.a)(n)),n.showResults=n.showResults.bind(Object(l.a)(n)),n.showLoader=n.showLoader.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"handleDepartureDateSelect",value:function(e){console.log("date select  "),console.log(e),this.setState({departureDate:e})}},{key:"handleDepartureDateChange",value:function(e){console.log("date  change"),console.log(e),this.setState({departureDate:e})}},{key:"handleReturnDateSelect",value:function(e){console.log("DATE"),console.log(e),this.setState({returnDate:e})}},{key:"handleReturnDateChange",value:function(e){null==e?this.setState({returnDate:e,roundtrip:!1}):this.setState({returnDate:e,roundtrip:!0})}},{key:"onSearch",value:function(){var e=this;this.setState({results:null}),console.log("currency! "+this.state.currency);var t=this.state.departureDate,a=this.state.returnDate;if(this.state.roundtrip&&this.state.returnDate<this.state.departureDate)this.setState({showAlert:!0,loading:!1,message:"Return date must be after departure date"});else{var n=new Date,s=new Date(n.getFullYear(),n.getMonth(),n.getDate()+1);if(s.getFullYear()<=t.getFullYear()&&s.getMonth()<=t.getMonth()&&s.getDate()<=t.getDate()){var r=this.state.currency;console.log(r);var c=this.state.origin,i=this.state.destination,o="".concat(t.toLocaleDateString(void 0,{year:"numeric"}),"-").concat(t.toLocaleDateString(void 0,{month:"2-digit"}),"-").concat(t.toLocaleDateString(void 0,{day:"2-digit"})),l="";this.state.roundtrip&&(l="".concat(a.toLocaleDateString(void 0,{year:"numeric"}),"-").concat(a.toLocaleDateString(void 0,{month:"2-digit"}),"-").concat(a.toLocaleDateString(void 0,{day:"2-digit"}))),g.a.get("".concat("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0","/").concat("US","/").concat(r,"/").concat("en-US","/").concat(c,"/").concat(i,"/").concat(o,"/").concat(l),{headers:{"x-rapidapi-key":"206f8b7770msh3b6406f406cd87bp19f0a9jsna2fbc9477909","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}}).then((function(t){e.readResponse(t)}),(function(e){console.log(e)})),this.setState({loading:!0,showImage:!1})}else this.setState({showAlert:!0,loading:!1,message:"Dates must be at least one day in the future"})}}},{key:"readResponse",value:function(e){console.log(e);var t=new Map;Array.from(e.data.Carriers).forEach((function(e){t.set(e.CarrierId,e.Name)}));var a=new Map;Array.from(e.data.Places).forEach((function(e){a.set(e.PlaceId,e.Name)}));var n=new Map;Array.from(e.data.Places).forEach((function(e){n.set(e.PlaceId,e.SkyscannerCode)})),console.log(t);var s=[];if(e.data.Quotes.length>0)for(var r=0,c=e.data.Quotes[0].MinPrice,i=1;i<e.data.Quotes.length;i++){var o=e.data.Quotes[i].MinPrice;o<c&&(r=i,c=o)}for(var l=0;l<e.data.Quotes.length;l++){var d=e.data.Quotes[l];s.push(Object(y.jsx)(D,{price:d.MinPrice,carrier:t.get(d.OutboundLeg.CarrierIds[0]),direct:d.Direct,destination:n.get(d.OutboundLeg.DestinationId),origin:n.get(d.OutboundLeg.OriginId),currency:this.state.currency,cheapest:l==r,date:this.state.departureDate,roundtrip:this.state.roundtrip,inboundleg:this.state.roundtrip?d.InboundLeg:null,inbounddate:this.state.roundtrip?this.state.returnDate:null}))}console.log("new results"),console.log(s),this.setState({results:s,loading:!1})}},{key:"showResults",value:function(){return null!=this.state.results?this.state.results.length>0?(console.log("here"),console.log(this.state.results),Object(y.jsx)("div",{children:this.state.results})):(console.log("no results"),Object(y.jsx)(N,{})):(console.log("null"),Object(y.jsx)("div",{}))}},{key:"showAlert",value:function(){var e=this;return this.state.showAlert?Object(y.jsxs)("div",{className:"alert",children:[Object(y.jsx)("p",{className:"alertheading",children:this.state.message}),Object(y.jsx)("button",{onClick:function(){return e.setState({showAlert:!1})},children:"X"})]}):Object(y.jsx)("div",{})}},{key:"showLoader",value:function(){return this.state.loading?Object(y.jsx)(w.a,{type:"balls",color:"#2762e0",height:50,width:50,className:"loader"}):Object(y.jsx)("div",{})}},{key:"componentDidUpdate",value:function(e,t){e.currency!=this.props.currency&&this.setState({currency:this.props.currency})}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"master",children:Object(y.jsxs)("div",{className:"border",children:[Object(y.jsx)(this.showAlert,{}),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("div",{className:"group",children:[Object(y.jsx)(k,{placeholder:"To:",id:"destination",getLocations:this.getLocations,handleLocationChange:this.handleLocationChange}),Object(y.jsx)(k,{placeholder:"From:",id:"origin",getLocations:this.getLocations,handleLocationChange:this.handleLocationChange})]}),Object(y.jsxs)("div",{className:"group",style:{marginBottom:"10px"},children:[Object(y.jsxs)("label",{onClick:function(e){return e.preventDefault()},children:["Departure Date:",Object(y.jsx)(j.a,{className:"dateinput",selected:this.state.departureDate,onSelect:this.handleDepartureDateSelect,onChange:this.handleDepartureDateChange})]}),Object(y.jsxs)("label",{onClick:function(e){return e.preventDefault()},children:["Return Date:",Object(y.jsx)(j.a,{className:"dateinput",onSelect:this.handleReturnDateSelect,onChange:this.handleReturnDateChange,selected:this.state.returnDate})]})]}),Object(y.jsx)("div",{className:"button",children:Object(y.jsx)("span",{onClick:this.state.buttonShow?this.onSearch:null,className:"enter",id:this.state.buttonShow?"":"disabled",children:"Find flights"})})]}),Object(y.jsx)("div",{className:"loader-container",children:Object(y.jsx)(this.showLoader,{})}),this.state.showImage?Object(y.jsx)("img",{className:"airplane",src:L,alt:"plane art"}):Object(y.jsx)("div",{}),Object(y.jsx)(this.showResults,{})]})})}}]),a}(s.a.Component),R=(a(222),a(100)),I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={expand:!1,options:[]},n.getCurrencies=n.getCurrencies.bind(Object(l.a)(n)),n.showCurrencies=n.showCurrencies.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"getCurrencies",value:function(){var e=this;g.a.request({method:"GET",url:"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies",headers:{"x-rapidapi-key":"206f8b7770msh3b6406f406cd87bp19f0a9jsna2fbc9477909","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}}).then((function(t){var a=[];Array.from(t.data.Currencies).forEach((function(e){a.push({label:e.Code,value:e.Code})})),e.setState({options:a,expand:!0})})).catch((function(e){console.error(e)}))}},{key:"showCurrencies",value:function(){var e=this;return this.state.expand?Object(y.jsx)(R.a,{options:this.state.options,className:"select",onChange:function(t){return e.props.pickCurrency(t)}}):Object(y.jsx)("div",{className:"button-currency",children:"$"})}},{key:"render",value:function(){return Object(y.jsx)("div",{onClick:this.getCurrencies,children:Object(y.jsx)(this.showCurrencies,{})})}}]),a}(s.a.Component),P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={currency:"USD"},n.pickCurrency=n.pickCurrency.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"pickCurrency",value:function(e){console.log("setting currency to "+e.label),this.setState({currency:e.label})}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"master",children:[Object(y.jsxs)("div",{className:"header",children:[Object(y.jsx)("div",{className:"title",children:"Flight Search - where to next?"}),Object(y.jsx)("div",{className:"currencies",children:Object(y.jsx)(I,{pickCurrency:this.pickCurrency})})]}),Object(y.jsx)(A,{today:new Date,currency:this.state.currency})]})}}]),a}(s.a.Component);var F=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(P,{})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(y.jsx)(F,{}),document.getElementById("root")),M()},59:function(e,t,a){}},[[224,1,2]]]);
//# sourceMappingURL=main.6aaa0936.chunk.js.map