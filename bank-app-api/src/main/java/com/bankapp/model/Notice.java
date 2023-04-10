package com.bankapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer noticeId;

    private String noticeSummary;
    private String noticeDetails;
    private Date noticeBeginDt;
    private Date noticeEndDt;
    private Date createDt = new Date();
}
