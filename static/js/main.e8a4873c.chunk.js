(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{168:function(e,t,n){e.exports=n(281)},174:function(e,t,n){},281:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(150),s=n.n(r),c=n(151),u=n(106),o=n.n(u),l=n(152),d=n(50),f=n(163),m=n(165),h=(n(174),n(291)),p=n(295),y=n(292),g=n(300),k=n(296),b=n(298),v=n(293),E=function e(t,n){var a=this;Object(d.a)(this,e),this.getUninfected=function(){return a.population-a.totalInfected},this.getPeopleIncubating=function(){var e=a.sim.state.incubationDays;return a.infectedByDay.slice(0,e).reduce((function(e,t){return e+t}),0)},this.getPeopleInfectious=function(){var e=a.sim.state.incubationDays,t=a.sim.state.incubationDays+a.sim.state.infectiveDays;return a.infectedByDay.slice(e,t).reduce((function(e,t){return e+t}),0)},this.startDay=function(e){a.day=e,a.infectedByDay.unshift(0),a.newInfections=0},this.processInteractions=function(e){var t=e.interactionRate*a.interactionRate*a.sim.getMitigationMult(),n=a.getUninfected()/a.population,i=e.getPeopleInfectious()*t*n*a.spreadMult;a.newInfections+=i},this.endDay=function(){a.infectedByDay[0]=a.newInfections,a.totalInfected+=a.newInfections};var i=t.bucketsData.reduce((function(e,t){return e+t.relativeSize}),0),r=n.relativeSize/i,s=t.state.population*r,c=t.state.initialInfected*r;this.sim=t,this.population=s,this.interactionRate=n.spreadMultiple,this.totalInfected=c,this.infectedByDay=[c],this.totalDeaths=0,this.newInfections=0,this.newDeaths=0,this.spreadMult=this.sim.R0Adj*r/this.sim.state.infectiveDays},I=function e(t){var n=this;Object(d.a)(this,e),this.calculateR0Adj=function(e){var t=[],a=[];e.forEach((function(n){e.forEach((function(e){t.push(n.spreadMultiple*e.spreadMultiple),a.push(n.spreadMultiple*n.relativeSize*e.relativeSize)}))}));var i=function(e,t){var n=e.map((function(e,n){var a=t[n];return[e*a,a]})).reduce((function(e,t){return[e[0]+t[0],e[1]+t[1]]}),[0,0]);return n[0]/n[1]}(t,a);return n.state.initialR0/i},this.getResults=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||n.state.useAnimate){var t=n.dailyData.effectiveR0.findIndex((function(e){return e>1})),a=n.dailyData.effectiveR0.findIndex((function(e,a){return e<1&&a>t&&!n.inLockdown(a+1)})),i=a>2?(n.dailyData.infected[a-1]+n.dailyData.infected[a-2])/2:0,r=Array(n.dailyData.effectiveR0.length).fill(i),s=n.getChartBuckets(),c=n.getChartBucketsCategories();return{bucketsUsed:n.state.useBuckets,infectious:n.dailyData.infectious,infected:n.dailyData.infected,deaths:n.dailyData.deaths,effectiveR0:n.dailyData.effectiveR0,buckets:s,bucketCategories:c,herdImmunity:r}}},this.processDay=function(e){return n.day=e,n.buckets.map((function(t){return t.startDay(e)})),n.startOfDayInfectious=n.getInfectious(),n.buckets.forEach((function(e){n.buckets.forEach((function(t){t.processInteractions(e)}))})),n.buckets.map((function(e){return e.endDay()})),n.dailyData.infectious.push(n.getInfectiousPercent()),n.dailyData.infected.push(n.getInfectedPercent()),n.dailyData.deaths.push(n.getDeathsPercent()),n.dailyData.effectiveR0.push(n.getEffectiveR0()),n.getResults()},this.finishRun=function(){return n.buckets.forEach((function(e){console.log("--------- bucket ---------"),console.log("Interaction Rate: ".concat(e.interactionRate)),console.log("Infected: ".concat(e.totalInfected/e.population))})),n.getResults(!0)},this.getInfectious=function(){return n.buckets.map((function(e){return e.getPeopleInfectious()})).reduce((function(e,t){return e+t}))},this.getInfected=function(){return n.buckets.map((function(e){return e.totalInfected})).reduce((function(e,t){return e+t}))},this.getDeaths=function(){return n.buckets.map((function(e){return e.totalDeaths})).reduce((function(e,t){return e+t}))},this.getNewInfections=function(){return n.buckets.map((function(e){return e.newInfections})).reduce((function(e,t){return e+t}))},this.getNewDeaths=function(){return n.buckets.map((function(e){return e.newDeaths})).reduce((function(e,t){return e+t}))},this.getInfectiousPercent=function(){return n.getInfectious()/n.state.population},this.getInfectedPercent=function(){return n.getInfected()/n.state.population},this.getDeathsPercent=function(){return n.getDeaths()/n.state.population},this.getEffectiveR0=function(){return n.getNewInfections()/n.startOfDayInfectious*n.state.infectiveDays||0},this.getChartBuckets=function(){return n.buckets.map((function(e,t){return{x:t+1,y:e.totalInfected/e.population}}))},this.getChartBucketsCategories=function(){var e=[];return n.buckets.forEach((function(t){var a=n.getLabel("".concat(t.interactionRate,"x"),e);e.push(a)})),e},this.getLabel=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=0===a?e:"".concat(e,".").concat(a);return t.includes(i)?n.getLabel(e,t,a+1):i},this.inLockdown=function(e){if(n.state.lockdownEffectiveness>0){var t=n.state.lockdownStart+n.state.lockdownDays;return e>=n.state.lockdownStart&&e<t}},this.getMitigationMult=function(){return n.inLockdown(n.day)?1-n.state.lockdownEffectiveness:1},this.state=t,this.day=0,this.bucketsData=t.useBuckets?t.buckets:t.naiveModelBuckets,this.R0Adj=this.calculateR0Adj(this.bucketsData),this.buckets=this.bucketsData.map((function(e){return new E(n,e)})),this.dailyData={infectious:[],infected:[],deaths:[],effectiveR0:[]}},D=(n(113),n(153)),S=n(55),C=n(107),R=n(164),w=n(38),B=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.runSimulation()},a.runSimulation=Object(l.a)(o.a.mark((function e(){var t,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("runSimulation"),!a.state.useBuckets){e.next=5;break}return t=a.bucketTextInput.current.value.trim().split("\n").map((function(e){return JSON.parse(e)})),e.next=5,a.setState({buckets:t});case 5:if(a.setState({results:a.emptyResults,usedBuckets:a.state.useBuckets}),a.day=0,a.sim=new I(a.state),clearInterval(a.timer),a.state.useAnimate)a.timer=setInterval((function(){a.animateDay()}),100);else{for(n=1;n<=a.state.days;n++)a.sim.processDay(n);i=a.sim.finishRun(),a.setState({results:i})}case 10:case"end":return e.stop()}}),e)}))),a.animateDay=function(){if(a.day++,a.day<a.state.days){var e=a.sim.processDay(a.day);a.setState({results:e})}else clearInterval(a.timer),a.sim.finishRun()},a.changeInput=function(e,t){a.setState(Object(c.a)({},e,t))},a.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{backgroundColor:"#371A32",padding:20,paddingTop:30,paddingBottom:30,fontSize:15,color:"white"}},i.a.createElement("h2",{style:{fontWeight:"bold",color:"white"}},"Coronavirus Super Spreader Model"),i.a.createElement("span",null,"Created by ",i.a.createElement("a",{style:{color:"#F2C7EB"},href:"https://twitter.com/jspaulding"},"Jesse Spaulding"),". Source code available on ",i.a.createElement("a",{style:{color:"#F2C7EB"},href:"https://github.com/jspauld/coronavirus-super-spreader-model"},"GitHub"))),a.renderDescription(),i.a.createElement(D.a,{fluid:!0},i.a.createElement(C.a,{className:"h-100"},a.renderLeftCol(),a.renderRightCol())))},a.renderDescription=function(){return i.a.createElement("div",{style:{backgroundColor:"#F2C7EB",padding:20,fontSize:15,borderRadius:0}},i.a.createElement("p",{style:{maxWidth:1e3}},i.a.createElement("b",null,"About this model:")," This model helps visualize how heterogeneity in the population affects the level at which we can expect to achieve herd immunity. I created this because some epidemiologists have been ",i.a.createElement("a",{href:"https://www.nytimes.com/2020/05/01/opinion/sunday/coronavirus-herd-immunity.html"},"making arguments against herd immunity")," using naive models that fail to account for heterogeneity entirely."),i.a.createElement("p",{style:{maxWidth:1e3}},i.a.createElement("b",null,"Why heterogenity matters:")," Not everyone is alike in their likelihood of catching and spreading the virus. Someone who lives in a dense urban area and goes to crowded bars every night is ",i.a.createElement("i",null,"MUCH"),' more likely to contract and spread the virus than a person who sits at home playing video games all day. "Super spreaders" catch the virus first, and as they become immune the R0 is lowered among the remaining population.'),i.a.createElement("p",{style:{maxWidth:1e3}},i.a.createElement("b",null,"Disclaimer:")," I'm not an epidemiologist. There may be errors in my code. The source code is available on ",i.a.createElement("a",{href:"https://github.com/jspauld/coronavirus-super-spreader-model"},"GitHub"),"."))},a.renderLeftCol=function(){var e=a.state.buckets.reduce((function(e,t){return"".concat(e).concat(JSON.stringify(t),"\n")}),"");return i.a.createElement(S.a,{sm:5,style:{backgroundColor:"#F1EBF0",paddingTop:30,paddingBottom:30}},i.a.createElement("h4",{style:{marginBottom:20}},"Choose model"),i.a.createElement(w.a.Check,{id:"useBucketsNo",name:"useBuckets",type:"radio",label:"Naive",onChange:function(e){return a.changeInput(e.target.name,!1)},defaultChecked:!a.state.useBuckets}),i.a.createElement(w.a.Check,{id:"useBucketsYes",name:"useBuckets",type:"radio",label:"Heterogeneous (accounts for super spreaders)",onChange:function(e){return a.changeInput(e.target.name,!0)},defaultChecked:a.state.useBuckets}),a.state.useBuckets&&i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a.Label,{column:!0,sm:"6",style:{fontSize:14}},"Buckets"),i.a.createElement(w.a.Control,{ref:a.bucketTextInput,as:"textarea",defaultValue:e,style:{height:200,fontSize:14}})),i.a.createElement(w.a.Check,{id:"useAnimate",name:"useAnimate",type:"checkbox",label:"Animate charts",style:{marginTop:30},onChange:function(e){return a.changeInput(e.target.name,e.target.checked)},defaultChecked:a.state.useAnimate}),a.renderSimulateButton(),i.a.createElement("h4",{style:{marginTop:30}},"Parameters"),a.inputs.map((function(e){return a.renderInput(e)})),a.renderSimulateButton())},a.renderSimulateButton=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(R.a,{variant:"primary",className:"btn-lg",onClick:a.runSimulation,style:{marginTop:20}},"Run Simulation"))},a.renderInput=function(e){return i.a.createElement(w.a.Group,{key:e[1],as:C.a,className:"inputContainer"},i.a.createElement(w.a.Label,{column:!0,sm:"6",style:{fontSize:14}},e[0]),i.a.createElement(S.a,{sm:"6"},i.a.createElement(w.a.Control,{type:"text",id:e[1],defaultValue:e[2],onChange:function(e){return a.changeInput(e.target.id,Number(e.target.value))}})))},a.renderRightCol=function(){return i.a.createElement(S.a,{sm:7,style:{paddingTop:30}},i.a.createElement("div",null,i.a.createElement("h4",null,"Population infected over time"),a.renderInfectedChart(),a.state.usedBuckets&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",null,"Population infected by bucket"),i.a.createElement("p",null,"The population is divided into buckets according to likelihood of catching and spreading the virus."),a.renderBucketsChart()),i.a.createElement("h4",null,"R0 over time"),a.renderR0Chart()))},a.renderInfectedChart=function(){return i.a.createElement(h.a,{theme:p.a.material,domain:{x:[0,a.state.days],y:[0,1]},style:{labels:{fontSize:8}},height:270},i.a.createElement(y.a,{x:10,y:10,centerTitle:!0,orientation:"horizontal",gutter:20,style:{title:{fontSize:14},labels:{fontSize:10}},data:[{name:"Infectious",symbol:{fill:"orange"}},{name:"Infected Population",symbol:{fill:"purple"}},{name:"Herd Immunity",symbol:{fill:"pink"}}]}),i.a.createElement(g.a,null),i.a.createElement(g.a,{dependentAxis:!0,tickFormat:function(e){return"".concat(100*e,"%")}}),i.a.createElement(k.a,{data:a.state.results.infectious,style:{data:{fill:"orange",opacity:1}}}),i.a.createElement(b.a,{data:a.state.results.infected,style:{data:{stroke:"purple",opacity:1}}}),i.a.createElement(b.a,{data:a.state.results.herdImmunity,style:{data:{stroke:"pink",strokeWidth:2,opacity:1}}}))},a.renderBucketsChart=function(){return i.a.createElement(h.a,{theme:p.a.material,domain:{y:[0,1]},domainPadding:20,height:220},i.a.createElement(g.a,null),i.a.createElement(g.a,{dependentAxis:!0,tickFormat:function(e){return"".concat(100*e,"%")}}),i.a.createElement(v.a,{data:a.state.results.buckets,categories:{x:a.state.results.bucketCategories},style:{data:{fill:"purple"}}}))},a.renderR0Chart=function(){return i.a.createElement(h.a,{theme:p.a.material,domain:{x:[0,a.state.days],y:[0,4]},height:220},i.a.createElement(y.a,{x:10,y:10,centerTitle:!0,orientation:"horizontal",gutter:20,style:{title:{fontSize:14},labels:{fontSize:10}},data:[{name:"R0 Over Time",symbol:{fill:"purple"}}]}),i.a.createElement(g.a,null),i.a.createElement(g.a,{dependentAxis:!0}),i.a.createElement(b.a,{data:a.state.results.effectiveR0,style:{data:{stroke:"purple",opacity:1}}}))},a.emptyResults={buckets:[],bucketCategories:[],infectious:[],infected:[],deaths:[],effectiveR0:[],herdImmunity:[]},a.state={useBuckets:!1,usedBuckets:!1,useAnimate:!0,naiveModelBuckets:[{relativeSize:1,spreadMultiple:1}],buckets:[{relativeSize:1,spreadMultiple:20},{relativeSize:5,spreadMultiple:5},{relativeSize:20,spreadMultiple:2},{relativeSize:48,spreadMultiple:1},{relativeSize:20,spreadMultiple:.5},{relativeSize:5,spreadMultiple:.25},{relativeSize:1,spreadMultiple:.1}],results:a.emptyResults},a.day=0,a.sim=null,a.inputs=[["Population","population",1e6],["Initial infected","initialInfected",1e3],["Initial R0","initialR0",2.5],["Days before infectious","incubationDays",3],["Days Infectious","infectiveDays",7],["Days in chart","days",150],["Mitigation start day","lockdownStart",60],["Mitigation days","lockdownDays",14],["Mitigation effectiveness","lockdownEffectiveness",0]],a.inputs.forEach((function(e){a.state[e[1]]=e[2]})),a.bucketTextInput=i.a.createRef(),a}return n}(i.a.Component);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(B,null)),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.e8a4873c.chunk.js.map