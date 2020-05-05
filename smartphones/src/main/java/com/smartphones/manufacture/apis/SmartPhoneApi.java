package com.smartphones.manufacture.apis;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartphones.manufacture.response.SmartPhone;

@RestController
@CrossOrigin(origins = "*")
public class SmartPhoneApi {
	@GetMapping(value = "/getSmartPhonesList", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<SmartPhone> getAllSmartPhonesList() {

		return getData();
	}

	public List<SmartPhone> getData() {

		SmartPhone phone1 = new SmartPhone();
		phone1.setId("P0001");
		phone1.setDesc("iPhone X 128GB Internal Memory, 8GB RAM, 6 Inch IPS Display");
		phone1.setName("iPhone X");
		phone1.setPrice(500000);
		phone1.setUpdated("Wed Sep 20 2019 17:22:41 GMT+0700");

		SmartPhone phone2 = new SmartPhone();
		phone2.setId("P0002");
		phone2.setDesc(
				"Super Retina XDR display, 5.8?inch (diagonal) all?screen OLED Multi?Touch display, HDR display, 2436?by?1125-pixel resolution at 458 ppi 2,000,000:1 contrast ratio (typical)");
		phone2.setName("iPhone 11 Pro");
		phone2.setPrice(70000);
		phone2.setUpdated("Wed Sep 20 2019 17:22:41 GMT+0700");

		SmartPhone phone3 = new SmartPhone();
		phone3.setId("P0003");
		phone3.setDesc(
				"Liquid Retina HD display 6.1-inch (diagonal) all-screen LCD Multi-Touch display with IPS technology 1792-by-828-pixel resolution at 326 ppi 1400:1 contrast ratio (typical)");
		phone3.setName("iPhone XR");
		phone3.setPrice(60000);
		phone3.setUpdated("Wed Sep 20 2019 17:22:41 GMT+0700");

		return Arrays.asList(phone1, phone2, phone3);

	}

	@PostMapping(name = "/saveSmartPhone", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<SmartPhone> saveData(@RequestBody SmartPhone smartPhone) {
		getData().add(smartPhone);
		return getData();
	}

	@PutMapping(name = "/updateSmartPhone", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public SmartPhone updateData(@RequestParam String id, @RequestParam Integer price) {
		SmartPhone object = getData().stream().filter(obj -> obj.getId().equalsIgnoreCase(id)).distinct().findFirst()
				.get();
		object.setPrice(price);
		return object;
	}

	@DeleteMapping(name = "/deleteSmartPhone", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<SmartPhone> deleteData(@RequestParam String id) {
		return getData().stream().filter(obj -> !obj.getDesc().equalsIgnoreCase(id)).collect(Collectors.toList());
	}

}
