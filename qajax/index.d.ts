// Type definitions for Qajax
// Project: https://github.com/gre/qajax
// Definitions by: Boltmade <https://github.com/Boltmade>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="q" />

import * as Q from "q";

export = Qajax;
export as namespace Qajax;

declare function Qajax(url : string) : Q.Promise<XMLHttpRequest>;
declare function Qajax(options : any) : Q.Promise<XMLHttpRequest>;
declare function Qajax(url : string, options : any) : Q.Promise<XMLHttpRequest>;

declare namespace Qajax {
	export var defaults : any;
	export function filterStatus(validStatus : number) : (xhr : XMLHttpRequest) => Q.Promise<XMLHttpRequest>;
	export function filterStatus(validStatus : (status : number) => boolean) : (xhr : XMLHttpRequest) => Q.Promise<XMLHttpRequest>;
	export function filterSuccess() : Q.Promise<XMLHttpRequest>;

	export function toJSON(xhr : XMLHttpRequest) : Q.Promise<any>;

	export function getJSON(url : string) : Q.Promise<any>;

	export function serialize(paramsObj : any) : string;
}