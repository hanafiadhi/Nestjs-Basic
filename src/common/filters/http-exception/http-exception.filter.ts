import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { MESSAGES } from '@nestjs/core/constants';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const regex = /^[a-zA-Z]+/;
    const ctx = host.switchToHttp();
    // console.log(ctx);
    const response = ctx.getResponse<Response>();
    // console.log(response);

    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    /**
     * ini untuk mendapatkan errornya
     */
    const exceptionResponse: any = exception.getResponse();
    console.log(exception.getResponse());
    let error: any = {};
    if (Array.isArray(exceptionResponse.message)) {
      exceptionResponse.message.forEach((message) => {
        const match = message.match(regex);
        error[match[0]] !== undefined
          ? error[match[0]].push(message)
          : (error[match[0]] = [message]);
      });
      response.status(status).json({
        statusCode: status,
        status: exceptionResponse.error,
        error: error,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else {
      const error = exceptionResponse.error;
      delete exceptionResponse.error;
      response.status(status).json({
        statusCode: status,
        status: error,
        ...exceptionResponse,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
