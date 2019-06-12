var rcvjson = 
{
    "payment": {
      "methods": [{
        "code": "cc",
        "label": "Debit / Credit card"
      }, {
        "code": "nb",
        "label": "Net banking"
      }, {
        "code": "wallet",
        "label": "Paytm"
      }],
      "options": {
        "cc": {
          "visa_cc": "Visa",
          "mast_cc": "Master card",
          "amex_cc": "Amex",
          "rupay_dc": "Rupay",
          "dinec_cc": "Diners club card",
          "jcb_cc": "Jcb",
          "maes_cc": "Maestro card",
          "unkwn_cc": "Unknown"
        },
        "nb": {
          "all": {
            "air_nb": "Airtel Payments Bank",
            "andhra_nb": "Andhra Bank",
            "axis_nb": "AXIS Bank",
            "bam_nb": "Bank of Maharashtra",
            "canara_nb": "Canara Bank",
            "cat_sy_nb": "Catholic Syrian Bank",
            "cboi_nb": "Central Bank Of India",
            "city_nb": "Citi Bank",
            "cui_nb": "City Union Bank",
            "corp_nb": "Corporation Bank",
            "cosmo_nb": "Cosmos Bank",
            "dcb_nb": "DCB Bank",
            "dena_nb": "Dena Bank",
            "duets_nb": "Deutsche Bank",
            "dhanl_nb": "Dhanlaxmi Bank",
            "feb_nb": "Federal Bank",
            "icici_nb": "ICICI Bank",
            "idbi_nb": "IDBI Bank",
            "idfc_nb": "IDFC FIRST Bank",
            "indb_nb": "Indian Bank ",
            "indo_nb": "Indian Overseas Bank",
            "indus_ind_nb": "IndusInd Bank",
            "jb_nb": "Jammu & Kashmir Bank",
            "jans_nb": "Janata Sahakari Bank Pune",
            "kar_nb": "Karnataka Bank",
            "kvc_nb": "Karur Vysya - Corporate Banking",
            "kv_nb": "Karur Vysya Bank",
            "km_nb": "Kotak Mahindra Bank",
            "lv_nb": "Lakshmi Vilas Bank",
            "lvc_nb": "Lakshmi Vilas Bank - Corporate Banking",
            "obc_nb": "Oriental Bank of Commerce",
            "pmc_nb": "Punjab & Maharashtra Co-operative Bank Limited",
            "pnsb_nb": "Punjab & Sind Bank",
            "pnb_nb": "Punjab National Bank",
            "pnbc_nb": "Punjab National Bank - Corporate Banking",
            "sars_nb": "Saraswat Bank",
            "sib_nb": "South Indian Bank",
            "sbi_nb": "State Bank of India",
            "synd_nb": "Syndicate Bank",
            "tmb_nb": "Tamilnad Mercantile Bank",
            "bcob_nb": "The Bharat Co-op. Bank Ltd",
            "nin_nb": "The Nainital Bank",
            "uco_nb": "UCO Bank",
            "union_nb": "Union Bank",
            "union_corp_nb": "Union Bank - Corporate Banking",
            "uboi_nb": "United Bank Of India",
            "vijaya_nb": "Vijaya Bank",
            "yes_nb": "Yes Bank"
          },
          "popular": {
            "axis_nb": "Axis Bank",
            "icici_nb": "ICICC Bank",
            "sbi_nb": "State Bank of India",
            "canara_nb": "Canara Bank",
            "idbi_nb": "IDBI Bank",
            "yes_nb": "Yes Bank"
          }
        },
        "wallet": {
          "top": {
            "paytm_wallet": "Paytm"
          },
          "others": {}
        },
        "op": {
          "paypal_int": "Paypal"
        },
        "paypal": {
          "wallet": "Indian User",
          "paypal_int": "International User"
        }
      },
      "subtitle": {
        "cc": "Visa, Master card, Amex, Rupay etc",
        "nb": "Choose from all banks",
        "wallet": "Paytm Wallet"
      }
    },
    "version": 1
  }
    let pg_types = rcvjson.payment.methods;
    pg_options_div = document.getElementsByClassName("pg-option-container")[0];
    let html_to_append = '';
    pg_types.forEach(function(item){
        html_to_append += `<div class='pym-method' id='`+String(item.code) +`'>`+
        `<div class="pym-radio-button">`+
         `<label class="ty-radio ty-radio-blue">`+
            `<input type="radio" name="payments">`+
              `<i>`+
              `</i>`+
          `</label>`+
        `</div>`+
           `<div class="pym-caption">`+
               `<div class="caption">`+ item.label +`</div>`+
           `</div>`+ 
   `</div>`+    
`</div>`
    });
    pg_options_div.innerHTML = html_to_append;
//netBank popular  
    let nb_popular = rcvjson.payment.options.nb.popular;
    let nb_bank_popular = document.getElementsByClassName("popular-nb")[0];
    let html_to_nb_append = '';
    for(let key in nb_popular){
        html_to_nb_append += `<div class="pnb-row" id="`+String(key)+`" value="`+nb_popular[key]+`" onclick="popularBank('`+nb_popular[key]+`',event,'`+key+`')">`
        +nb_popular[key]+
        `<span class="tick" style="display:none">`+
              `<div class="tick-mark-arrow1">`+`</div>`+
              `<div class ="tick-mark-arrow2">`+`</div>`+
       `</span>`+ 
     `</div>` 
    }
    nb_bank_popular.innerHTML = html_to_nb_append;

  //net bankAll
    let nb_list = rcvjson.payment.options.nb.all;
    let nb_bank_all = document.getElementsByClassName('bank-container')[0];
    let html_to_nball_append='';
    for(let key in nb_list){
      if(!(key in nb_popular)){
        html_to_nball_append += `<li class="other-bank"id="`+String(key)+`" value="`+nb_list[key]+`" onclick="SelectBank('`+nb_list[key]+`',event,'`+key+`')">`+
                                `<label class="wrapper">`+
                                  `<label class="ty ty-blue" id = "ty_rb">`+
                                  `<input type="radio" name="other-bank" id = "ty_rd">`+
                                    `<i id="roundtick">`+`</i>`+
                                  `</label>`+
                                    `<div class="bankname">`+
                                      nb_list[key]+
                                    `</div>`+
                                `</label>`+
                            `</li>`
      }
    }
    nb_bank_all.innerHTML = html_to_nball_append;

    // var upi = document.getElementById('upi');
   
    // var paytm = document.getElementById('paytm');
      // upi.onclick = function(){
      //    upi_wrapperShow.style.display = "block";
      //    main_pageShow.style.display ="none";
      // }


      var main_pageShow = document.getElementById('main-page');
      // var upi_wrapperShow = document.getElementById('upi-wrapper');
      var credit_wrapperShow = document.getElementById('credit_wrapper');
      var netbanking_wrapperShow = document.getElementById('netBank');
      var wallet_wrapperShow = document.getElementById('other_wallets');
      // var wallet_paytm_wrappershow = document.getElementById('paytmwallet');
      var credit = document.getElementById('cc');
      var net_banking = document.getElementById('nb');
      var wallet = document.getElementById('wallet');
      // var upiback = document.getElementById('back');
      var creditBack = document.getElementById('creditBack');
      var walletBack = document.getElementById('walletshow');
      // var upifield= document.getElementsByClassName('inputss-field')[0];
      // var input_bottom = document.getElementById('upi_input');
      var netBack = document.getElementById('netBack');
      var another_bank = document.getElementsByClassName('another-bank')[0];
        // var ty_slide_active = document.getElementsByClassName('ty-slide active')[0];
      var ty_slide =  document.getElementsByClassName('ty-slide')[0];  
      var ty_slide_cross =  document.getElementsByClassName('ty-slide-cross')[0];
     
      var banksearchRef = document.getElementById('banksearch');
      var selNetBank;
      var selNetBorder;
      var selectNetBank;
      var selectBankId;
      var selectedBankids;
      var selectRadiobuttonTicked; 
     var paytmOTPwrapper = document.getElementById('PaytmOTP');
     var paytmwrapper = document.getElementById('other_wallets');
     var walletBalanceModal  = document.getElementById('walletShowBalance');
     var payotherOptionWrapper = document.getElementById('PayOtherWrapper'); 
      
      // var pnb_rowRef = document.getElementsByClassName("pnb-row");
     
      // var paytmGo = document.getElementById('gopaytm');
      // var paytmBack = document.getElementById('walletshowBack');
     
       credit.onclick = function(){
        credit_wrapperShow.style.display ="block";
         main_pageShow.style.display ="none";
         document.getElementById('card_no').focus();
      }
      net_banking.onclick = function(){
        netbanking_wrapperShow.style.display = "block";
        main_pageShow.style.display ="none";
      }
      wallet.onclick = function(){
         wallet_wrapperShow.style.display="block";
         main_pageShow.style.display ="none";
         document.getElementById('pay').focus();
      } 
      walletBack.onclick = function(){
         wallet_wrapperShow.style.display="none";
         main_pageShow.style.display ="block";
        var paytm_mobile_border = document.getElementById('pay');
        document.getElementById('pay').value="";
        var errorstar = document.getElementsByClassName('erstar');
        paytm_mobile_border.style.borderBottom = "2px solid #ddd";
        for(i=0;i<errorstar.length;i++){
          errorstar [i].innerHTML="";
        }
      }

    //  function EnterMobileno(){
    //   var mo_no= document.getElementById('pay').value;
    //   var otpPage = document.getElementById('paytmOTP'); 
    //   var wallet_Show = document.getElementById('paytm_content');
    //   var inputBorder = document.getElementById('pay');
    //   var errmsg = document.getElementById('errmsg');
    //   if(mo_no===""||mo_no===null||mo_no===undefined){
    //     inputBorder.style.borderBottom="2px solid red";
    //     errmsg.innerHTML=  "required";

    //   }
    //   else if(mo_no.length< 10){
    //     inputBorder.style.borderBottom="2px solid red";
    //     errmsg.innerHTML=  "required";
           
    //   }
    //   else{
    //     wallet_Show.style.display="none";
    //     otpPage.style.display="block";
    //   }
     
      // alert('hi');
    // }
      // upiback.onclick= function(){
      //    main_pageShow.style.display = "block";
      //    upi_wrapperShow.style.display = "none";
      //    var upiborder = document.getElementById('upi_input');
      //    var error_star = document.getElementsByClassName('erstar')[0];
      //    error_star.innerHTML="";
      //    upiborder.style.borderBottom="2px solid #ddd";
      // }
      creditBack.onclick= function(){
        main_pageShow.style.display = "block";
        credit_wrapperShow.style.display ="none";
        var cardno_border=document.getElementById('card_no');
        var cardname_border = document.getElementById('name');
        var month_border = document.getElementById('mm');
        var year_border = document.getElementById('yyyy');
        var cvv_border = document.getElementById('cvvf');
        var errorstar = document.getElementsByClassName('erstar');
        cardno_border.style.borderBottom = "2px solid #ddd";
        cardname_border.style.borderBottom = "2px solid #ddd";
        month_border.style.borderBottom = "2px solid #ddd";
        year_border.style.borderBottom = "2px solid #ddd";
        cvv_border.style.borderBottom = "2px solid #ddd";
        for(i=0;i<errorstar.length;i++){
          errorstar[i].innerHTML="";
        }
  
  
      }
      netBack.onclick= function(){
         main_pageShow.style.display = "block";
         netbanking_wrapperShow.style.display="none";
  
      }
      another_bank.onclick= function(){
          ty_slide.style.transform = "translate(0%,0%)";
      }
      ty_slide_cross.onclick = function(){
          ty_slide.style.transform = "translate(0%,100%)";
      }
      var backTopaytmpage = document.getElementById('backTopaytmpage');
      backTopaytmpage .onclick = function(){
        paytmwrapper.style.display="block";
        paytmOTPwrapper.style.display="none";
        var paytm_mobile_border = document.getElementById('otp');
        document.getElementById('otp').value="";
        var errorstar = document.getElementsByClassName('erstar');
        paytm_mobile_border.style.borderBottom = "2px solid #ddd";
        document.getElementById('pay').focus();
        for(i=0;i<errorstar.length;i++){
          errorstar [i].innerHTML="";
        }
        

      }
      var editRef = document.getElementById('EDIT');
      editRef.onclick = function(){
        paytmwrapper.style.display="block";
        paytmOTPwrapper.style.display="none";
        document.getElementById('otp').value="";
        document.getElementById('pay').focus();
      }
      var walletBallanceBackRef = document.getElementById('walletBalanceBack');
      walletBallanceBackRef.onclick = function(){
        walletBalanceModal.style.display="none";
        paytmOTPwrapper.style.display="block";
        document.getElementById('otp').focus();
      }
     
      var payotherBack = document.getElementById('payotherBack');
      payotherBack.onclick = function(){
        walletBalanceModal.style.display="block";
        payotherOptionWrapper.style.display="none";
      }
    //  paytmGo.onclick = function(){
    //   wallet_paytm_wrappershow.style.display="block";
    //   wallet_wrapperShow.style.display="none";
      
    //   alert('hi');
    //  }
    //  paytmBack.onclick = function(){
    //    wallet_wrapperShow.style.display="block";
    //    wallet_paytm_wrappershow.style.display="none";
    //  } 
    

// cc validation 

const defaultFormat = /(\d{1,4})/g;
  const cardConstant = [
   {
   type: 'maestro',
   pattern: /^(5018|5020|5038|504[4-9]|5081|6002|6037|6038|6220|6304|6759|676[1-3])/, //custom modification by Travelyaari
   format: defaultFormat,
   length: [12, 13, 14, 15, 16, 17, 18, 19],
   cvcLength: [3],
   luhn: true,
   provider:'maes_cc'
   }, {
   type: 'dinersclub',
   pattern: /^(36|38|30[0-5])/,
   format: defaultFormat,
   length: [14],
   cvcLength: [3],
   luhn: true,
   provider:'dinec_cc'
   }, {
   type: 'laser',
   pattern: /^(6706|6771|6709)/,
   format: defaultFormat,
   length: [16, 17, 18, 19],
   cvcLength: [3],
   luhn: true,
   provider:'unkwn_cc'
   }, {
   type: 'jcb',
   pattern: /^35/,
   format: defaultFormat,
   length: [16],
   cvcLength: [3],
   luhn: true,
   provider:'jcb_cc'
   }, {
   type: 'unionpay',
   pattern: /^62/,
   format: defaultFormat,
   length: [16, 17, 18, 19],
   cvcLength: [3],
   luhn: false,
   provider:'unkwn_cc'
   }, {
   type: 'rupay',
   pattern: /^(508[5-9][0-9][0-9])|(60698[5-9])|(60699[0-9])|(607[0-8][0-9][0-9])|(6079[0-7][0-9])|(60798[0-4])|(60800[1-9])|(608[1-4][0-9][0-9])|(608500)|(6521[5-9][0-9])|(652[2-9][0-9][0-9])|(6530[0-9][0-9])|(6531[0-4][0-9])/,
   format: defaultFormat,
   length: [16, 17],
   cvcLength: [3],
   luhn: true,
   provider:'rupay_dc'
   }, {
   type: 'discover',
   pattern: /^(6011|65|64[4-9]|622)/,
   format: defaultFormat,
   length: [16],
   cvcLength: [3],
   luhn: true,
   provider:'unkwn_cc'
   }, {
   type: 'mastercard',
   pattern: /^5[1-5]/,
   format: defaultFormat,
   length: [16],
   cvcLength: [3],
   luhn: true,
   provider:'mast_cc'
   }, {
   type: 'amex',
   pattern: /^3[47]/,
   format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
   length: [15],
   cvcLength: [3, 4],
   luhn: true,
   provider:'unkwn_cc'
   }, {
   type: 'visa',
   pattern: /^4/,
   format: defaultFormat,
   length: [13, 14, 15, 16],
   cvcLength: [3],
   luhn: true,
   provider:'visa_cc'
   }
  ];
  
  // Card Validation
  __indexOf = [].indexOf || function(item) {
   for (var i = 0, l = this.length; i < l; i++) {
   if (i in this && this[i] === item) return i;
   }
   return -1;
  }
  
  function luhnCheck(num) {
   // console.log(num);
   var digit, digits, odd, sum, _i, _len;
   odd = true;
   sum = 0;
   digits = (num + '').split('').reverse();
   // console.log(digits);
   for (_i = 0, _len = digits.length; _i < _len; _i++) {
   digit = digits[_i];
   digit = parseInt(digit, 10);
   if ((odd = !odd)) {
   digit *= 2;
   }
   if (digit > 9) {
   digit -= 9;
   }
   sum += digit;
   }
   // console.log(sum);
   return sum % 10 === 0;
  };
  
  function cardFromNumber(num) {
   var card, _i, _len;
   num = (num + '').replace(/\D/g, '');
   for (_i = 0, _len = cardConstant.length; _i < _len; _i++) {
   card = cardConstant[_i];
   if (card.pattern.test(num)) {
   return card;
   }
   }
  };
  
  function validateCardNumber(num) {
   var card, _ref;
   num = (num + '').replace(/\s+|-/g, '');
   if (!/^\d+$/.test(num)) {
   return false;
   }
   card = cardFromNumber(num)
   if (!card) {
   return false;
   }
   return (_ref = num.length, __indexOf.call(card.length, _ref) >= 0) && (card.luhn === false || luhnCheck(num));
  };
  
  function cardType(num) {
   var _ref;
   if (!num) {
   return null;
   }
   return ((_ref = cardFromNumber(num)) != null ? _ref.type : void 0) || null;
  };
  
  function cardProvider(num) {
   var _ref;
   if (!num) {
   return null;
   }
   return ((_ref = cardFromNumber(num)) != null ? _ref.provider : 'unkwn_cc') || null;
  };
  
  function validateCardCVV(cvc, type) {
   var _ref, _ref1;
   if (type) {
   return _ref = cvc.length, __indexOf.call((_ref1 = cardFromType(type)) !== null ? _ref1.cvcLength : void 0, _ref) >= 0;
   } else {
   return cvc.length >= 3 && cvc.length <= 4;
   }
  }
  
  function cardFromType(type) {
   var card, _i, _len;
   for (_i = 0, _len = cardConstant.length; _i < _len; _i++) {
   card = cardConstant[_i];
   if (card.type === type) {
   return card;
   }
   }
  }
  
  function isEmpty(val) {
   return (val === undefined || val === '' || val === null || isNaN(val));
  }
   
    function Handlekey(event){
      let name = event.target.name;
      // console.log(name);
      let parent = event.target.parentElement;
      let key_val = event.key;
      let key_val_length = event.target.value.length;
      let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let namepattern = new RegExp( "[a-zA-Z ]");
  
      switch(name){
          case "cardNo":
              let card_no = document.getElementById("card_no").value;
              if(card_no.length >= 19){
                  event.preventDefault();
                  return false;
              }
              if(!(key_val in digits)){
                  event.preventDefault();
                  return false;
              }
              break;
          case "CardName":
              if (!(namepattern.test(key_val))){
                  event.preventDefault();
                  return false;
              }
              break;
          case "month":
              let card_mon = document.getElementById("mm").value;
              if(card_mon.length >= 2){
                  event.preventDefault();
                  return false;
              }
              if(!(key_val in digits)){
                  event.preventDefault();
                  return false;
              }
              break;
          case "year":
              let card_year = document.getElementById("yyyy").value;
              if(card_year.length >= 4){
                  event.preventDefault();
                  return false;
              }
              if(!(key_val in digits)){
                  event.preventDefault();
                  return false;
              }
              break;
          case "cvv":
              let card_cvv = document.getElementById("cvvf").value;
              if(card_cvv.length >= 3){
                  event.preventDefault();
                  return false;
              }
              if(!(key_val in digits)){
                  event.preventDefault();
                  return false;
              }
              break;
           case"PAYTM":
           let paytm_val = document.getElementById('pay').value;
             if(paytm_val.length >=10){
              event.preventDefault();
              return false;
             }
             if(!(key_val in digits)){
                  event.preventDefault();
                  return false;
              } 
             break;  
            case"PAYTMOTP":
            let otp_val = document.getElementById('otp').value;
            if(otp_val.length >=6){
              event.preventDefault();
              return false;
             }
             if(!(key_val in digits)){
                  event.preventDefault();
                  return false;
              } 
                 
      }
  }
  
  
    function Handlefocus(event){
      var parent = event.target.parentElement;
      // console.log(event.target.parentElement);
      // console.log(event.target.parentElement);
       // var cardfield = document.getElementsByClassName('input-field')[0];
       
      switch(event.target.name){
  
         case "cardNo":
               parent.children.label.className="activeinp";
               parent.children.card_no.style="color:#444";
               parent.children.cardNo.style.borderBottom ="2px solid #007bb9";
               parent.children.errormsg.innerHTML="";
               break;
           case "CardName": 
                 parent.children.label.className="activeinp";
                 parent.children.CardName.style="color:#444";
                 parent.children.CardName.style.borderBottom ="2px solid #007bb9";
                 parent.children.errormsg.innerHTML="";
  
               break; 
           case "month":
                // console.log(parent.children.label);
                 parent.children.label.className="activeinp";
                 parent.children.month.style="color:#444";
                 parent.children.month.style.borderBottom ="2px solid #007bb9";
                 parent.children.errormsg.innerHTML="";
               
                break; 
           case "year":
                 parent.children.label.className="activeinp";
                 parent.children.year.style="color:#444";
                 parent.children.year.style.borderBottom ="2px solid #007bb9";
                 parent.children.errormsg.innerHTML="";
              
             break; 
           case "cvv": 
                 parent.children.label.className="activeinp";
                 parent.children.cvv.style="color:#444";
                 parent.children.cvv.style.borderBottom ="2px solid #007bb9";
                 parent.children.errormsg.innerHTML="";
             
             break;
          //  case "vpa":
          //         parent.children.label.className="activevpa";
          //         parent.children.vpa.style="color:#444";
          //         parent.children.vpa.style.borderBottom ="2px solid #007bb9";
          //         parent.children.errormsg.innerHTML="";
          //    break;
          case "PAYTM":
                 parent.children.label.className="activeinp";
                 parent.children.PAYTM.style="color:#444";
                 parent.children.PAYTM.style.borderBottom ="2px solid #007bb9";
                 parent.children.errormsg.innerHTML="";
            break;

            case "PAYTMOTP":
                 parent.children.label.className="activeinp";
                 parent.children.PAYTMOTP.style="color:#444";
                 parent.children.PAYTMOTP.style.borderBottom ="2px solid #007bb9";
                 parent.children.errormsg.innerHTML="";
            break;
        } 
    }
   var card = document.getElementById('card_no');
   card.onkeyup = function(){
    let val_no = document.getElementById('card_no').value;
            let clean_num = val_no.replace(/[^0-9]+/g, '');
                     const ccinfotype = cardType(clean_num);
              const ccinfoprovider = cardProvider(clean_num);
              let cc_sprite_div = document.getElementById("cc_spritelogo");
                      switch(ccinfoprovider){
                            case "visa_cc":
                                  cc_sprite_div.className = '';
                                  // cc_sprite_div.classList.add("credit-sprite");
                                  cc_sprite_div.classList.add("visa");
 
                                  break;
                                  case "mast_cc":
                                  cc_sprite_div.className = '';
                                  // cc_sprite_div.classList.add("credit-sprite");
                                  cc_sprite_div.classList.add("master");
                                  break;
                                  case "amex_cc":
                                  cc_sprite_div.className = '';
                                  // cc_sprite_div.classList.add("credit-sprite");
                                  cc_sprite_div.classList.add("amex");
                                  break;
                                  case "rupay_dc":
                                  cc_sprite_div.className = '';
                                  // cc_sprite_div.classList.add("credit-sprite");
                                  cc_sprite_div.classList.add("rupay");
                                  break;
                                  default:
                                  cc_sprite_div.className = '';
                                  // cc_sprite_div.classList.add("credit-sprite");
                                  cc_sprite_div.classList.add("unknown");
                                  break;
                         }
                     }
 
  
  function Handleblur(event){
       let name = event.target.name;
       var parent = event.target.parentElement;
       let c_num = document.getElementById("card_no").value;
       let c_name = document.getElementById("name").value;
       let c_mon = document.getElementById("mm").value;
       let c_year = document.getElementById("yyyy").value;
       let c_cvv = document.getElementById("cvvf").value;
  
         let clean = c_num.replace(/[^0-9]+/g, '');
         const ccinfotype = cardType(clean);
         const ccinfoprovider = cardProvider(clean);
  
         let num_val_flag = false;
         let name_val_flag = false;
         let mon_val_flag = false;
         let year_val_flag = false;
         let cvv_val_flag = false;
  
         let today = new Date();
         let dd = Number(today.getDate());
         let mm = Number(today.getMonth() + 1);
         let yyyy = Number(today.getFullYear());
  
        if(dd<10){
          dd = String('0'+dd);
         }
  
        if(mm<10){
           mm = String('0'+mm);
        }
  
         dd = String(dd);
         mm = String(mm);
         yyyy=String(yyyy);
    
      num_val_flag = (clean != null || !isNaN(clean) || clean.length >= 12 && clean.length <= 19) ? true : false;
      name_val_flag = (c_name!=null || c_name!="" || c_name!=undefined) ? true : false;
  
       if(!isNaN(c_name)){
       name_val_flag = false;
       }
       const pattern_test = new RegExp("[a-zA-Z ]+$");
      if(!(pattern_test.test(String(c_name)))){
          name_val_flag = false;
      }
        mon_val_flag = (c_mon.length == 2 && c_mon >= "01" && c_mon <= "12") ? true : false;
        year_val_flag = (c_year.length == 4 && c_year >= yyyy) ? true : false;
        cvv_val_flag = isEmpty(c_cvv) ? false : validateCardCVV(c_cvv, ccinfotype);
     
  
        if(num_val_flag){
          let clean_num = c_num.replace(/[^0-9]+/g, '');
          if(clean_num.length < 12 || clean_num.length > 19){
              num_val_flag = false;
          }
          num_val_flag = validateCardNumber(clean) ? true : false;
      }
  
      if(name_val_flag){
          if(c_name === "" || c_name === null || !isNaN(c_name) || c_name === undefined){
              name_val_flag = false;
          }
      }
      if(mon_val_flag){
          let year = document.getElementById("yyyy");
          let val_year = year.value;
  
          if(c_mon == undefined || c_mon == "" || c_mon == null){
              mon_val_flag = false;
          }
          if((c_mon.length != 2)||(c_mon<1)||(c_mon>12)){
              mon_val_flag = false;
          }
          if(!(val_year == undefined || val_year == "" || val_year == null)){
              if(!(val_year.length < 4 || val_year < yyyy)){
                  if(val_year == yyyy){
                      if(c_mon < mm){
                          mon_val_flag = false;
                      }
                  }
              }
          }
      }
      if(year_val_flag){
          let val_mon = c_mon.value;
  
          if(c_year == undefined || c_year == "" || c_year == null){
              year_val_flag = false;
          }
          if(c_year.length < 4){
              year_val_flag = false;
          }
          if (c_year < yyyy){
              year_val_flag = false;
          }
          if(!(val_mon == undefined || val_mon == "" || val_mon == null)){
              if(!((val_mon.length != 2)||(val_mon<1)||(val_mon>12))){
                  if(c_year == yyyy){
                      if(val_mon < mm){
                          let mon = document.getElementById("mm");
                          mon.parentElement.children.errormsg.innerHTML = "Card Expired";
                          // mon.parentElement.children.label.className = "activelab";
                          mon.parentElement.children.label.className = "active_label_notvalid";
                          mon.parentElement.children.month.style="color:red";
                          mon.parentElement.children.month.style.borderBottom="2px solid red";
                          mon_val_flag = false;
                      }
                  }
              }
          }
      }
      if(cvv_val_flag){
          let val_cvv = event.target.value;
              if(val_cvv.length < 3){
                  cvv_val_flag = false;
              }
              if(!isEmpty(val_cvv)){
                  if(!(validateCardCVV(val_cvv, ccinfotype))){
                      cvv_val_flag = false;
                  }
              }
      }
  
         // console.log(parent.children.cardNo);
         // console.log(event.target.parentElement);
    if(event.target.value){
            switch(name){
              case "cardNo":
                      let val_no = event.target.value;
                      let clean_num = val_no.replace(/[^0-9]+/g, '');
                      const isValid = validateCardNumber(clean);
                      // const ccinfotype = cardType(clean);
                      // const ccinfoprovider = cardProvider(clean);
                      // let cc_sprite_div = document.getElementById("cc_spritelogo");
  
                      if(clean_num.length < 12 || clean_num.length > 19){
                           parent.children.errormsg.innerHTML = "Not a valid card ";
                           parent.children.label.className = "active_label_notvalid";
                           parent.children.cardNo.style="color:red";
                           parent.children.cardNo.style.borderBottom="2px solid red";
                           num_val_flag = false;
                      }
                      else if(!isValid){
                           parent.children.errormsg.innerHTML = "Not a valid card ";
                           parent.children.label.className = "active_label_notvalid";
                           parent.children.cardNo.style="color:red";
                           parent.children.cardNo.style.borderBottom="2px solid red";
                           num_val_flag = false;
                      }
                      else{
                          parent.children.label.className = "activelabel";
                          parent.children.cardNo.style.borderBottom="2px solid #ddd";
                          parent.children.errormsg.innerHTML = "";
                          num_val_flag = true;
                      }
                     
                      // if(isValid){
                      //     switch(ccinfoprovider){
                      //        case "visa_cc":
                      //              cc_sprite_div.className = '';
                      //              cc_sprite_div.classList.add("credit-sprite");
                      //              cc_sprite_div.classList.add("visa");
  
                      //              break;
                      //              case "mast_cc":
                      //              cc_sprite_div.className = '';
                      //              cc_sprite_div.classList.add("credit-sprite");
                      //              cc_sprite_div.classList.add("master");
                      //              break;
                      //              case "amex_cc":
                      //              cc_sprite_div.className = '';
                      //              cc_sprite_div.classList.add("credit-sprite");
                      //              cc_sprite_div.classList.add("amex");
                      //              break;
                      //              case "rupay_dc":
                      //              cc_sprite_div.className = '';
                      //              cc_sprite_div.classList.add("credit-sprite");
                      //              cc_sprite_div.classList.add("rupay");
                      //              break;
                      //              default:
                      //              cc_sprite_div.className = '';
                      //              cc_sprite_div.classList.add("credit-sprite");
                      //              break;
                      //     }
                      // }
  
                      // else{
                      //     cc_sprite_div.className = '';
                      //     cc_sprite_div.classList.add("credit-sprite");
                      //     cc_sprite_div.classList.add("unknown");
                      // }
                  
                  break;
              case "CardName":
                    
                    let val_name = String(event.target.value);
                          const pattern = new RegExp("[a-zA-Z ]+$");
                          if(val_name === "" || val_name === null || !isNaN(val_name) || val_name === undefined){
                              parent.children.errormsg.innerHTML = "Enter valid name";
                              parent.children.label.className = "active_label_notvalid";
                              parent.children.CardName.style="color:red";
                              parent.children.CardName.style.borderBottom="2px solid red";
                              name_val_flag = false;
                          }
                          else if(!(pattern.test(String(event.target.value)))){
                              parent.children.errormsg.innerHTML = "Enter valid name";
                              parent.children.label.className = "aactive_label_notvalid";
                              parent.children.CardName.style="color:red";
                              parent.children.CardName.style.borderBottom="2px solid red";
                              name_val_flag = false;
                          }
                          else{
                              parent.children.label.className = "activelabel";
                              parent.children.errormsg.innerHTML = "";
                              parent.children.CardName.style.borderBottom="2px solid #ddd";
                              name_val_flag = true;
                          }
  
                break;
              case "month":
                   let val_mm = event.target.value; 
                      let year = document.getElementById("yyyy");
                      let val_year = year.value;
  
                      if(val_mm == undefined || val_mm == "" || val_mm == null){
                          parent.children.errormsg.innerHTML = "Invalid month";
                          parent.children.label.className = "active_label_notvalid";
                          parent.children.month.style="color:red";
                          parent.children.month.style.borderBottom="2px solid red";
                          name_val_flag = false;
                      }
                      else if((val_mm.length != 2)){
                          parent.children.errormsg.innerHTML = "2 digit";
                          parent.children.label.className = "active_label_notvalid";
                          parent.children.month.style="color:red";
                          parent.children.month.style.borderBottom="2px solid red";
                          mon_val_flag = false;
                      }
                      else if((val_mm.length != 2)||(val_mm<1)||(val_mm>12)){
                          parent.children.errormsg.innerHTML = "Invalid";
                          parent.children.label.className = "active_label_notvalid";
                          parent.children.month.style="color:red";
                          parent.children.month.style.borderBottom="2px solid red";
                          mon_val_flag = false;
                      }
                      else{
                          parent.children.label.className = "activelabel";
                          parent.children.errormsg.innerHTML = "";
                          parent.children.month.style.borderBottom="2px solid #ddd";
                          mon_val_flag = true;
                      }
                      if(!(val_year == undefined || val_year == "" || val_year == null)){
                          if(!(val_year.length < 4 || val_year < yyyy)){
                              if(val_year == yyyy){
                                  if(val_mm < mm){
                                      parent.children.errormsg.innerHTML = "Card Expired";
                                      parent.children.errormsg.style = "fontSize:12px";
                                      parent.children.label.className = "active_label_notvalid";
                                      parent.children.month.style="color:red";
                                      parent.children.month.style.borderBottom="2px solid red";
                                      mon_val_flag = false;
                                  }
                              }
                          }
                      }
                 
                break;
                case "year":
  
                let val_yyyy = event.target.value;
                let mon = document.getElementById("mm");
                let val_mon = mon.value;
  
              if(val_yyyy == undefined || val_yyyy == "" || val_yyyy == null){
                  parent.children.errormsg.innerHTML = "Invalid year";
                  parent.children.label.className = "active_label_notvalid";
                  parent.children.year.style="color:red";
                  parent.children.year.style.borderBottom="2px solid red";
                  year_val_flag = false;
              }
              else if(val_yyyy.length < 4){
                  parent.children.errormsg.innerHTML = "4 digit";
                  parent.children.label.className = "active_label_notvalid";
                  parent.children.year.style="color:red";
                  parent.children.year.style.borderBottom="2px solid red";
                  year_val_flag = false;
              }
              else if (val_yyyy < yyyy){
                  parent.children.errormsg.innerHTML = "Card Expired";
                  parent.children.label.className = "active_label_notvalid";
                  parent.children.year.style="color:red";
                  parent.children.year.style.borderBottom="2px solid red";
                  year_val_flag = false;
              }
              else{
                  parent.children.label.className = "activelabel";
                  parent.children.errormsg.innerHTML = "";
                  parent.children.year.style.borderBottom="2px solid #ddd";
                  year_val_flag = true;
              }
              if(!(val_mon == undefined || val_mon == "" || val_mon == null)){
                  if(!((val_mon.length != 2)||(val_mon<1)||(val_mon>12))){
                      if(val_yyyy == yyyy){
                          if(val_mon < mm){
                              mon.parentElement.children.errormsg.innerHTML = "Card Expired";
                              mon.parentElement.children.month.style="color:red";
                              mon.parentElement.children.month.style.borderBottom="2px solid red";
                              parent.children.errormsg.style = "fontSize:12px";
                              mon.parentElement.children.label.className="active_label_notvalid";
                              // parent.children.label.className = "active_label_notvalid";
                             
                              // parent.children.year.style.borderBottom="2px solid red";
                              mon_val_flag = false;
                          }
                      }
                  }
              }
              break;
        
          case "cvv":
              
                        let val_cvv = event.target.value;
                            if(val_cvv.length < 3){
                                parent.children.errormsg.innerHTML = "3 digit";
                                parent.children.label.className = "active_label_notvalid";
                                parent.children.cvv.style="color:red";
                                parent.children.cvv.style.borderBottom="2px solid red";
                                cvv_val_flag = false;
                            }
                            else if((!isEmpty(val_cvv)) && (!(validateCardCVV(val_cvv, ccinfotype)))){
                                    parent.children.errormsg.innerHTML = "Invalid";
                                    parent.children.label.className = "active_label_notvalid";
                                    parent.children.cvv.style="color:red";
                                    parent.children.cvv.style.borderBottom="2px solid red";
                                    cvv_val_flag = false;
                            }
                            else{
                                parent.children.label.className = "activelabel";
                                parent.children.errormsg.innerHTML = "";
                                parent.children.cvv.style.borderBottom="2px solid #ddd";
                                cvv_val_flag = true;
                            }    
                    case "PAYTM":
                             let mob_Enterval = document.getElementById('pay').value;
                             if(mob_Enterval.length < 10){
                               parent.children.errormsg.innerHTML ="Enter valid mobile number";
                               parent.children.label.className="active_paytm_label_not_valid";
                               parent.children.PAYTM.style="color:red";
                               parent.children.PAYTM.style.borderBottom="2px solid red";
                             }
                             else{
                              parent.children.label.className="active_paytm_label";
                              parent.children.PAYTM.style.borderBottom="2px solid #ddd";
                              parent.children.errormsg.innerHTML = "";
                             }
                    break; 
                    case "PAYTMOTP":
                        let OTP_val = document.getElementById('otp').value;
                        if(OTP_val.length < 6){
                          parent.children.errormsg.innerHTML ="Enter valid OTP";
                          parent.children.label.className="active_paytm_label_not_valid";
                          parent.children.PAYTMOTP.style="color:red";
                          parent.children.PAYTMOTP.style.borderBottom="2px solid red";
                        }
                        else{
                         parent.children.label.className="active_paytm_label";
                         parent.children.PAYTMOTP.style.borderBottom="2px solid #ddd";
                         parent.children.errormsg.innerHTML = "";
                        }
               break; 
                // case "vpa":
                //      let val_vpa = event.target.value;
                //      if(val_vpa.length < 8){
                //      parent.children.errormsg.innerHTML = "Invalid";
                //      parent.children.label.className = "active_label_notvalid";
                //      parent.children.vpa.style="color:red";
                //      parent.children.vpa.style.borderBottom="2px solid red";
                //      }
                //      else{
                //      parent.children.label.className = "activelabel";
                //      parent.children.vpa.style.borderBottom="2px solid #ddd";
                //      parent.children.errormsg.innerHTML = "";
                //       } 

                break;
               
         }
     }
     else{
              parent.children.label.className="";
          switch(event.target.name){
           case "cardNo":
              parent.children.cardNo.style.borderBottom ="2px solid red";
              parent.children.errormsg.innerHTML="*";
               num_val_flag = false;
               break;
           case "CardName": 
              parent.children.CardName.style.borderBottom ="2px solid red";
              parent.children.errormsg.innerHTML="*";
              name_val_flag = false;
               break; 
           case "month":
              parent.children.month.style.borderBottom ="2px solid red";
              parent.children.errormsg.innerHTML="*";
              mon_val_flag = false; 
                break; 
           case "year":
             parent.children.year.style.borderBottom ="2px solid red";
             parent.children.errormsg.innerHTML="*";
             year_val_flag = false; 
             break; 
           case "cvv":
             parent.children.cvv.style.borderBottom ="2px solid red";          
             parent.children.errormsg.innerHTML=  "*";
             cvv_val_flag = false;
             break;
            case "PAYTM":
                parent.children.PAYTM.style.borderBottom ="2px solid red";          
                // parent.children.errormsg.innerHTML=  "*";          
             break; 
             case "PAYTMOTP":
                parent.children.PAYTMOTP.style.borderBottom ="2px solid red";          
                // parent.children.errormsg.innerHTML=  "*";          
             break;     
          //  case "vpa":
          //       parent.children.vpa.style.borderBottom ="2px solid red";          
          //       parent.children.errormsg.innerHTML=  "*";
          //  break; 
          
          }
     }    
     
     // if (num_val_flag===true && name_val_flag===true && mon_val_flag===true && year_val_flag===true && cvv_val_flag===true) {
     //    const isValidCard = validateCardNumber(clean);
  
      let cc_btn = document.getElementById("ccpaybtn");
      cc_btn.onclick = function(){
      if(num_val_flag && name_val_flag && mon_val_flag && year_val_flag && cvv_val_flag){
              console.log(c_num,c_name, c_mon,  c_year, c_cvv);
            } 
          }
  } 

  function popularBank(popularbank,event,key){
    let anotherBank_rendered_Ref = document.getElementsByClassName('another-bank-caption')[0];
  // var tickDivisionRef = document.getElementsByClassName('tick')[0];
    anotherBank_rendered_Ref.innerHTML=popularbank;
    selectNetBank = popularbank;
    selectBankId = key;
    // console.log(selectBankId)
    // Checking if exists & removing the tick]
    if(selNetBank ) {
     // console.log(selNetBank.getElementsByClassName("tick")[0])
     selNetBank.getElementsByClassName("tick")[0].style = "display:none";
     
    }
  // Selecting the element
  // console.log(event.target);
    event.target.getElementsByClassName("tick")[0].style = "display:block";
    selNetBank = event.target;
    
    var borderglow_all = document.querySelectorAll(".pnb-row.borderglow");
        borderglow_all.forEach(function(el){
         el.classList.remove('borderglow');
        })    
       event.target.classList.add('borderglow');
   var tickedRadioAll = document.querySelectorAll(".selectedButton");
   tickedRadioAll.forEach(function(et){
     et.classList.remove('selectedButton');
     et.style.display="none";
   }) 
  }      
  
  function SelectBank(bank,event,key){
   let anotherBank_rendered_Ref = document.getElementsByClassName('another-bank-caption')[0];
   let ty_slide =  document.getElementsByClassName('ty-slide')[0];
     
    ty_slide.style.transform = "translate(0%,100%)";
    anotherBank_rendered_Ref.innerHTML=bank;
    selectNetBank = bank;
    selectBankId =key;
    var parent = event.target.parentElement;
    var selectRadioRef=parent.children.roundtick;
    if(selectRadioRef!=undefined){
    if(selectRadiobuttonTicked){
       selectRadiobuttonTicked.style.display="none";
    }
         selectRadioRef.style.display="block";
         selectRadioRef.className="selectedButton";
         selectRadiobuttonTicked = selectRadioRef;
   }      
     var selectedBankId = event.target.parentElement.parentElement.getAttribute('id');
     
    //  console.log(selectedBankId);
     if(selectedBankId!=null)
     {
        selectedBankids = selectedBankId;
     }
     var Allpnb = document.querySelectorAll('.pnb-row');
  
      var borderglow_all = document.querySelectorAll(".pnb-row.borderglow"); 
     Allpnb.forEach(function(el){
    //   console.log(el.getAttribute('id'));
      //  if(selectedBankids != (el.getAttribute('id'))){
            borderglow_all.forEach(function(item){
               item.classList.remove('borderglow');
               item.getElementsByClassName("tick")[0].style = "display:none";
           });  
      //  } 
   });
     
  }
  
 banksearchRef.onkeyup = function(){
  var input, filter, ul, li, a, i, txtValue;
     input = banksearchRef.value;
     filter =input.toUpperCase();
     ul = document.getElementsByClassName("bank-container")[0];
     var li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
       a = li[i].getElementsByClassName("bankname")[0];
       txtValue = a.textContent || a.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
           li[i].style.display = "";
       } else {
           li[i].style.display = "none";
     }
   }  
}
// proceed to pay using netBank
var proceed = document.getElementById('netBankproceed');
proceed.onclick=function(){
if(selectNetBank=== undefined){
alert('please select the option');
}
else{
// console.log(selectNetBank);
console.log(selectBankId);
 }
}

var generateOTPbutton_ref = document.getElementById('topaytm');
generateOTPbutton_ref.onclick = function(event){
  var mob_no = document.getElementById('pay').value;
  // console.log(event.target.parentElement.children.pc.children[0].children.inp.children.errormsg);
  var error_required = event.target.parentElement.children.pc.children[0].children.inp.children;
  if(mob_no===''||mob_no===null||mob_no===undefined){
    error_required.errormsg.innerHTML="required";
    error_required.pay.style.borderBottom="2px solid red";
  
  }
  else if(mob_no.length < 10){
    error_required.errormsg.innerHTML="invalid";
    error_required.pay.style.borderBottom="2px solid red";
    
  }
  else{
    paytmwrapper.style.display="none";
    paytmOTPwrapper.style.display="block";
    document.getElementById('otp').focus();
    document.getElementById('mobnoShow').innerHTML = mob_no;
    document.getElementById('pay').value ="";
  }
  
}
var OTPbutton_REF = document.getElementById('toOTP');
OTPbutton_REF.onclick = function(event){
  var otp_val = document.getElementById('otp').value;
  var otp_required = event.target.parentElement.children.pc.children[0].children.inp.children;
  if(otp_val===''||otp_val===null||otp_val===undefined){
    otp_required.errormsg.innerHTML="required";
    otp_required.otp.style.borderBottom="2px solid red";
  }
  else if(otp_val.length < 6){
    otp_required.errormsg.innerHTML="invalid";
    otp_required.otp.style.borderBottom="2px solid red";
  }
  else{
    walletBalanceModal.style.display="block";
    paytmOTPwrapper.style.display="none";
  }

}

var confirm = document.getElementById('confirm');
confirm.onclick = function(){
  payotherOptionWrapper.style.display="block";
  walletBalanceModal.style.display="none";
}
payOtherOptionsbuttonRdef = document.getElementById('payOtherOptionsbutton');
payOtherOptionsbuttonRdef.onclick = function(){
  main_pageShow.style.display ="block";
  payotherOptionWrapper.style.display="none";
} 