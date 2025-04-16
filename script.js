
    function sendWebhook() {
        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productImage = document.getElementById('productImage').value;

        const webhookURL = '';

        const payload = {
            embeds: [
                {
                    title: productName,
                    description: productDescription,
                    image: {
                        url: productImage
                    },
                    color: 0xFFFFFF, // Beyaz renk için hexadecimal kodu
                    footer: {
                        text: 'Larqe Development',
                        icon_url: '' // Sunucu logosunun URL'sini buraya ekleyin
                    },
                    thumbnail: {
                        url: '', // Sunucu logosunun URL'sini buraya ekleyin
                        width: 50, // Logonun genişliğini istediğin değere ayarla
                        height: 50 // Logonun yüksekliğini istediğin değere ayarla
                    },
                    author: {
                        name: 'Larqe Development',
                        icon_url: '' // Sunucu logosunun URL'sini buraya ekleyin
                    }
                }
            ]
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => console.log(response))
        .catch(error => console.error(error));
        alert("Başarıyla Webhook Gönderildi")
    }
