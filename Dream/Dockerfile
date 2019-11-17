FROM openjdk:8
VOLUME /tmp
EXPOSE 8080
ADD target/dream-spring-boot-maven.jar dream-spring-boot-maven.jar
RUN bash -c 'touch /dream-spring-boot-maven.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom", "-Dspring.profiles.active=container", "-jar","/dream-spring-boot-maven.jar"]


