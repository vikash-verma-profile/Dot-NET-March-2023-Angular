import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid-ui',
  templateUrl: './grid.component.html',
})
export class GridComponent {

  //columns
  gridColumns:Array<any>=new Array<any>();

   //grid data
   gridData:Array<any>=new Array<any>();

   @Input("grid-columns")
   set setGridColumns(_gridColumns:Array<any>){
      this.gridColumns=_gridColumns;
   }
   @Input("grid-data")
   set setGridData(_gridData:Array<any>){
      this.gridData=_gridData;
   }
}
