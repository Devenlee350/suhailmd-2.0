FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/Devenlee350/suhail-2.0 /root/suhailmd-2.0
# RUN rm -rf /root/suhailmd-2.0/.git
WORKDIR /root/suhailmd-2.0
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ]
