"use strict";(self.webpackChunk_4dev=self.webpackChunk_4dev||[]).push([[386],{6386:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(4165),o=t(5861),a="Excel_wrapper__zRKai",s=t(4802),c=t(5415),l=t.n(c),i=t(184),d=function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n,t,o,a,c,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(l().Workbook),(t=n.addWorksheet("data")).columns=[{header:"pid",key:"pid",width:10},{header:"name",key:"name",width:10},{header:"cfo",key:"cfo",width:10,outlineLevel:1,collapsed:!0}],o=[{pid:65464,name:"foo",cfo:"A"}],t.insertRow(1),a=["","","","","\u0412\u0441\u0435\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"],t.insertRow(2,a),t.mergeCells("A1:AF1"),t.addRows(o),t.getColumn(3).eachCell({includeEmpty:!0},(function(e,n){console.log("rowNumber",n),e.protection={locked:!1},e.dataValidation={type:"list",allowBlank:!0,formulae:['"A,B,C"']}})),e.next=12,n.xlsx.writeBuffer();case 12:c=e.sent,i=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"}),(0,s.saveAs)(i,"test.xlsx");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)("div",{className:a,children:(0,i.jsx)("button",{onClick:e,children:"GO"})})}}}]);
//# sourceMappingURL=386.8f222f7a.chunk.js.map