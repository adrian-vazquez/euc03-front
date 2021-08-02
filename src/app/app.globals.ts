import { Component, OnInit, EventEmitter } from '@angular/core';

export var fromSecurity : boolean = false;
export var soeid: string = "...";
export var userName: string = "";
export var goc: string = "";
export var token: string = ""; 
export var segmentoName: string = ""; 
export var eucName: string = ""; 
export var clientCard: string = ""; 
export var clientId: string = ""; 
export var varAdded$: EventEmitter<any> = new EventEmitter();
export var oneEclipse: boolean = false; 

export var groups:string="";

export function setOneEclipse(value: boolean) {
    oneEclipse = value;
}

export function setFromSecurity(flag: boolean) {
    fromSecurity = flag;
    varAdded$.emit();
}
export function setSoeid(value: string) {
    soeid = value;
    varAdded$.emit();
}

export function setUserName(value: string) {
    userName = value;
    varAdded$.emit();
}

export function setGoc(value: string) {
    goc = value;
    varAdded$.emit();
}

export function setEucName(value: string) {
    eucName = value;
    varAdded$.emit();
}

export function setClientCard(value: string) {
    clientCard = value;
    varAdded$.emit();
}

export function setClientId(value: string) {
    clientId= value;
    varAdded$.emit();
}

export function setSegmentoName(value: string) {
    segmentoName= value;
    varAdded$.emit();
}

export function setGroups(value:any){
    groups = value;
    varAdded$.emit();
}