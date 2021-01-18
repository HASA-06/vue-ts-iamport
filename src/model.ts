interface DisplayDto {
  card_quota: Array<number>;
};

interface RequestPayParamDto {
  pg?: string;
  pay_method: string;
  escrow?: boolean;
  merchant_uid: string;
  name?: string;
  amount: number;
  tax_free?: number;
  currency?: string;
  language?: string;
  buyer_email?: string;
  buyer_name?: string;
  buyer_tel: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  custom_data?: object;
  notice_url?: string | Array<string>;
  display?: DisplayDto;
  company?: string;
};

interface RequestPayResponseDto {
  success: boolean;
  error_code?: string;
  error_msg: string;
  imp_uid: string;
  merchant_uid: string;
  pay_method: string;
  paid_amount: number;
  status: string;
  name: string;
  pg_provider: string;
  pg_tid: string;
  buyer_name: string;
  buyer_email: string;
  buyer_tel: string;
  buyer_addr: string;
  buyer_postcode: string;
  custom_data: any;
  paid_at: number;
  receipt_url: string;
  apply_num: string;
  vbank_num: string;
  vbank_name: string;
  vbank_holder: string;
  vbank_date: string;
};

export {
  DisplayDto,
  RequestPayParamDto,
  RequestPayResponseDto,
};