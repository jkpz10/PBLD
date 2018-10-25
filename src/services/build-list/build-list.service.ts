import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";


@Injectable()
export class buildListService {

  //INTEL BUILDS HOME AND GAMING
  private homeIntelHigh$ = this.db.list('/homeIntelHigh');
  private homeIntelMid$ = this.db.list('/homeIntelMid');
  private homeIntelLow$ = this.db.list('/homeIntelLow');
  private gamingIntelHigh$ = this.db.list('/gamingIntelHigh');
  private gamingIntelMid$ = this.db.list('/gamingIntelMid');
  private gamingIntelLow$ = this.db.list('/gamingIntelLow');

  //AMD BUILDS HOME AND GAMING
  private homeAmdHigh$ = this.db.list('/homeAmdHigh');
  private homeAmdMid$ = this.db.list('/homeAmdMid');
  private homeAmdLow$ = this.db.list('/homeAmdLow');
  private gamingAmdHigh$ = this.db.list('/gamingAmdHigh');
  private gamingAmdMid$ = this.db.list('/gamingAmdMid');
  private gamingAmdLow$ = this.db.list('/gamingAmdLow');



  constructor(private db:AngularFireDatabase){}


//methods to call on bld-result page
  //intel builds
  homeIntelHigh(){
    return this.homeIntelHigh$;
  }
  homeIntelMid(){
    return this.homeIntelMid$;
  }
  homeIntelLow(){
    return this.homeIntelLow$;
  }
  gamingIntelHigh(){
    return this.gamingIntelHigh$;
  }
  gamingIntelMid(){
    return this.gamingIntelMid$;
  }
  gamingIntelLow(){
    return this.gamingIntelLow$;
  }

  //AMD bulds
  homeAmdHigh(){
    return this.homeAmdHigh$;
  }
  homeAmdMid(){
    return this.homeAmdMid$;
  }
  homeAmdLow(){
    return this.homeAmdLow$;
  }
  gamingAmdHigh(){
    return this.gamingAmdHigh$;
  }
  gamingAmdMid(){
    return this.gamingAmdMid$;
  }
  gamingAmdLow(){
    return this.gamingAmdLow$;
  }


}

