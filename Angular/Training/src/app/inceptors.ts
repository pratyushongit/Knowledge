import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HTTPConfigInterceptor } from './common/services/http-interceptor';

export const httpInterceptors = [
    {provide : HTTP_INTERCEPTORS, useClass : HTTPConfigInterceptor, multi : true}
]