package com.qa.banking.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.sql.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateCustomerDto {

    private Long id;
    private String title;
    private String surname;
    private String firstName;
    private Date dateOfBirth;
    private String gender;
    private String customerType;
    private String address1;
    private String address2;
    private String cityTown;
    private String postcode;
    private String phoneNo;
    private String email;

}