'use strict';
var json = JSON.parse($.getJSON({
	'url': "js/json.json",
	'async': false
}).responseText);
console.log(json)
let elemen
let table = $("<table>")
table.class = "tables"
$("#testForm").append(table)

function create(elemen) {
	for (let k = 0; k < elemen.length; k++) {
		let tr = $("<tr>")
		table.append(tr)
		if (elemen[k].kind === "combo") {
			let td = $("<td>", {
				text: elemen[k].label
			})
			tr.append(td)
			let selec = $("<select>", {
				name: elemen[k].name
			})
			let td2 = $("<td>")
			tr.append(td2)
			td2.append(selec)
			for (let i = 0; i < elemen[k].variants.length; i++) {
				let options = $("<option>", {
					text: elemen[k].variants[i].text,
					value: elemen[k].variants[i].value
				})
				selec.append(options)
			}
		} else if (elemen[k].kind === "radio") {
			let td = $("<td>", {
				text: elemen[k].label
			})
			tr.append(td)
			let td2 = $("<td>")
			tr.append(td2)
			for (let i = 0; i < elemen[k].variants.length; i++) {
				let input = $("<input>", {
					value: elemen[k].variants[i].value,
					type: elemen[k].kind,
					name: elemen[k].name
				})
				td2.append(input)
				let span = $("<span>", {
					text: elemen[k].variants[i].text
				})
				td2.append(span)
			}
		} else if (elemen[k].kind === "memo") {
			let td = $("<td>", {
				text: elemen[k].label
			})
			tr.append(td)
			let td2 = $("<td>")
			tr.append(td2)
			let textareas = $("<textarea>")
			td2.append(textareas)
		} else if (elemen[k].kind === "submit") {
			let input = $("<input>", {
				type: elemen[k].kind,
				value: elemen[k].label
			})
			tr.append(input)
		} else {
			let td = $("<td>", {
				text: elemen[k].label
			})
			tr.append(td)
			let input = $("<input>", {
				type: elemen[k].kind,
				name: elemen[k].name,
			})
			let td2 = $("<td>")
			tr.append(td2)
			td2.append(input)
		}
	}
}
create(elemen = json.formDef1)
create(elemen = json.formDef2)
