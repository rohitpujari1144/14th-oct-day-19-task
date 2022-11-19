var msg=document.getElementById('msg')

function greet()
    {
        setTimeout(()=>
            {
                msg.innerText="10"

                setTimeout(()=>
                    {
                        msg.innerText="9"

                        setTimeout(()=>
                            {
                                msg.innerText="8"

                                setTimeout(()=>
                                    {
                                        msg.innerText="7"

                                        setTimeout(()=>
                                            {
                                                msg.innerText="6"

                                                setTimeout(()=>
                                                    {
                                                        msg.innerText="5"

                                                        setTimeout(()=>
                                                            {
                                                                msg.innerText="4"

                                                                setTimeout(()=>
                                                                    {
                                                                        msg.innerText="3"

                                                                        setTimeout(()=>
                                                                            {
                                                                                msg.innerText="2"

                                                                                setTimeout(()=>
                                                                                    {
                                                                                        msg.innerText="1"

                                                                                        setTimeout(()=>
                                                                                            {
                                                                                                msg.innerText="Happy Independence Day"
                                                                                                msg.style.color="blue"
                                                                                            }, 900)
                                                                                    }, 900)
                                                                            }, 900)
                                                                    }, 900)
                                                            }, 900)
                                                    }, 900)
                                            }, 900)
                                    }, 900)
                            }, 900)
                    }, 900)
            }, 900)     
    }

greet()