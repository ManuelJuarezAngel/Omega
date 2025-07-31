const ServiceStructuredData = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mantenimiento preventivo y correctivo especializado",
        "provider": {
            "@type": "Organization",
            "name": "RONMAR"
        },
        "areaServed": "México",
        "serviceType": "Infraestructura crítica, sistemas de respaldo, cableado estructurado"
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
        </script>
    );
};

export default ServiceStructuredData;
